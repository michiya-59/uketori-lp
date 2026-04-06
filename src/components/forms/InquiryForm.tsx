"use client";

import { useEffect, useState, type FormEvent } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  companyName: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  companyWebsite: "",
};

export default function InquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [startedAt, setStartedAt] = useState("");

  useEffect(() => {
    setStartedAt(String(Date.now()));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          startedAt,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "送信に失敗しました。");
      }

      setSubmitState("success");
      setForm(initialForm);
      setStartedAt(String(Date.now()));
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "送信に失敗しました。"
      );
    }
  }

  function updateField(name: keyof typeof initialForm, value: string) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  return (
    <form
      className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-200/50 md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-700">
            会社名
          </span>
          <input
            required
            autoComplete="organization"
            value={form.companyName}
            onChange={(event) => updateField("companyName", event.target.value)}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-700">
            ご担当者名
          </span>
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-700">
            メールアドレス
          </span>
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-700">
            電話番号
          </span>
          <input
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-neutral-700">
          ご相談内容
        </span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
          placeholder="現在の運用課題、試したい機能、導入時期などをご記入ください。"
        />
      </label>

      <input
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        value={form.companyWebsite}
        onChange={(event) => updateField("companyWebsite", event.target.value)}
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="startedAt" value={startedAt} />

      <p className="mt-4 text-xs leading-6 text-neutral-500">
        送信いただいた内容はお問い合わせ対応のために利用します。自動返信メールをお送りしますので、受信可能なメールアドレスをご入力ください。
      </p>

      {submitState === "success" && (
        <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          送信を受け付けました。担当よりご連絡します。確認メールもお送りしています。
        </div>
      )}

      {submitState === "error" && (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3.5 text-base font-medium text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitState === "submitting" ? "送信中..." : "フォームを送信する"}
      </button>
    </form>
  );
}
