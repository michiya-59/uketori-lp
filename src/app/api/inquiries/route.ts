import { NextResponse } from "next/server";

export const runtime = "nodejs";

type InquiryPayload = {
  companyName?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  companyWebsite?: string;
  startedAt?: string;
};

type ResendResponse = {
  id?: string;
  error?: {
    message?: string;
  };
};

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail =
  process.env.RESEND_FROM_EMAIL ?? "ウケトリ <uketori@rise-itkuru.com>";
const inquiryToEmail =
  process.env.INQUIRY_TO_EMAIL ?? "uketori@rise-itkuru.com";

const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_SUBMIT_DELAY_MS = 4000;
const MAX_MESSAGE_LENGTH = 5000;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function applyRateLimit(ip: string) {
  const now = Date.now();
  const attempts = (rateLimitStore.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (attempts.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  attempts.push(now);
  rateLimitStore.set(ip, attempts);
  return true;
}

async function sendEmail(payload: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY が設定されていません。");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [payload.to],
      subject: payload.subject,
      html: payload.html,
      reply_to: payload.replyTo,
    }),
  });

  const result = (await response.json()) as ResendResponse;

  if (!response.ok || result.error) {
    throw new Error(result.error?.message ?? "Resend の送信に失敗しました。");
  }
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  const secFetchSite = request.headers.get("sec-fetch-site");

  if (origin && host) {
    const originHost = new URL(origin).host;
    if (originHost !== host) {
      return NextResponse.json(
        { error: "不正な送信元です。" },
        { status: 403 }
      );
    }
  }

  if (
    secFetchSite &&
    secFetchSite !== "same-origin" &&
    secFetchSite !== "same-site" &&
    secFetchSite !== "none"
  ) {
    return NextResponse.json(
      { error: "外部サイトからの送信は許可されていません。" },
      { status: 403 }
    );
  }

  const clientIp = getClientIp(request);
  if (!applyRateLimit(clientIp)) {
    return NextResponse.json(
      { error: "送信回数が上限に達しました。しばらく待ってからお試しください。" },
      { status: 429 }
    );
  }

  let payload: InquiryPayload;
  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json(
      { error: "送信内容を読み取れませんでした。" },
      { status: 400 }
    );
  }

  const companyName = normalize(payload.companyName);
  const name = normalize(payload.name);
  const email = normalize(payload.email).toLowerCase();
  const phone = normalize(payload.phone);
  const message = normalize(payload.message);
  const companyWebsite = normalize(payload.companyWebsite);
  const startedAt = Number(payload.startedAt);

  if (companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  if (!Number.isFinite(startedAt)) {
    return NextResponse.json(
      { error: "フォームの検証に失敗しました。" },
      { status: 400 }
    );
  }

  const elapsed = Date.now() - startedAt;
  if (elapsed < MIN_SUBMIT_DELAY_MS || elapsed > 24 * 60 * 60 * 1000) {
    return NextResponse.json(
      { error: "送信内容を確認できませんでした。ページを開き直して再度お試しください。" },
      { status: 400 }
    );
  }

  if (!companyName || companyName.length > 120) {
    return NextResponse.json(
      { error: "会社名を正しく入力してください。" },
      { status: 400 }
    );
  }

  if (!name || name.length > 80) {
    return NextResponse.json(
      { error: "ご担当者名を正しく入力してください。" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email) || email.length > 320) {
    return NextResponse.json(
      { error: "メールアドレスを正しく入力してください。" },
      { status: 400 }
    );
  }

  if (phone.length > 40) {
    return NextResponse.json(
      { error: "電話番号を正しく入力してください。" },
      { status: 400 }
    );
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "ご相談内容を入力してください。" },
      { status: 400 }
    );
  }

  const safeCompanyName = escapeHtml(companyName);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "未入力");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    await Promise.all([
      sendEmail({
        to: inquiryToEmail,
        subject: `【ウケトリ】フォーム申込: ${companyName} / ${name}`,
        replyTo: email,
        html: `
          <div style="font-family: sans-serif; line-height: 1.7; color: #262626;">
            <h1 style="font-size: 20px; margin-bottom: 16px;">新しいフォーム申込がありました</h1>
            <p><strong>会社名:</strong> ${safeCompanyName}</p>
            <p><strong>ご担当者名:</strong> ${safeName}</p>
            <p><strong>メールアドレス:</strong> ${safeEmail}</p>
            <p><strong>電話番号:</strong> ${safePhone}</p>
            <p><strong>ご相談内容:</strong><br />${safeMessage}</p>
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e5e5;" />
            <p style="font-size: 12px; color: #737373;">IP: ${escapeHtml(clientIp)}</p>
          </div>
        `,
      }),
      sendEmail({
        to: email,
        subject: "【ウケトリ】お申し込みありがとうございます",
        html: `
          <div style="font-family: sans-serif; line-height: 1.7; color: #262626;">
            <p>${safeName} 様</p>
            <p>ウケトリへのお申し込みありがとうございます。以下の内容で受け付けました。</p>
            <div style="margin: 20px 0; padding: 16px; background: #fafafa; border: 1px solid #e5e5e5; border-radius: 12px;">
              <p><strong>会社名:</strong> ${safeCompanyName}</p>
              <p><strong>メールアドレス:</strong> ${safeEmail}</p>
              <p><strong>電話番号:</strong> ${safePhone}</p>
              <p><strong>ご相談内容:</strong><br />${safeMessage}</p>
            </div>
            <p>内容を確認のうえ、担当より順次ご連絡いたします。</p>
            <p>このメールに心当たりがない場合は、お手数ですが破棄してください。</p>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "メール送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}
