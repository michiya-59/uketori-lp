import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FinalCTASection() {
  return (
    <section className="bg-primary-600 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          バックオフィス業務を、
          <br />
          今日から変えよう。
        </h2>
        <p className="mt-4 text-lg text-primary-200">
          30日間無料。クレジットカード不要ですぐにお試しいただけます。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="secondary"
            size="lg"
            href="/apply"
            className="bg-white text-primary-600 hover:bg-primary-50 border-transparent"
          >
            無料で試す
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="/apply"
            className="text-white hover:bg-primary-700 hover:text-white"
          >
            申し込む
          </Button>
        </div>
      </div>
    </section>
  );
}
