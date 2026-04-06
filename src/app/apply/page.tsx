import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import InquiryForm from "@/components/forms/InquiryForm";

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50 pt-28 pb-16 md:pt-36">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <section className="lg:sticky lg:top-32">
            <span className="inline-flex rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
              無料トライアル・申込フォーム
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-neutral-900 md:text-5xl">
              無料で試す、
              <br />
              そのまま申し込む。
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
              下記フォーム送信後、運営宛てに通知されます。あわせて、ご入力いただいたメールアドレスにも受付完了メールを自動送信します。
            </p>
            <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg shadow-neutral-200/50">
              <h2 className="text-base font-semibold text-neutral-900">
                ご案内
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">
                <li>30日間無料でお試しいただけます。</li>
                <li>送信後、担当者が内容を確認して折り返しご連絡します。</li>
                <li>迷惑送信対策のため、一部の自動送信は制限しています。</li>
              </ul>
            </div>
          </section>

          <section>
            <InquiryForm />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
