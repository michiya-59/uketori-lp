import {
  BarChart3,
  FileText,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { HERO } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <Badge>{HERO.badge}</Badge>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-neutral-900 md:text-5xl lg:text-6xl whitespace-pre-line">
            {HERO.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500">
            {HERO.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="#">
              {HERO.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" href="#">
              {HERO.ctaSecondary}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {HERO.badges.map((text) => (
              <span
                key={text}
                className="text-sm text-neutral-500"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-xl shadow-neutral-200/50 md:p-6">
          <div className="rounded-xl bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-sm text-neutral-400">
                ウケトリ Dashboard
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <DashboardCard
                icon={<FileText className="h-5 w-5 text-primary-600" />}
                label="今月の請求書"
                value="48件"
                sub="+12 件（先月比）"
              />
              <DashboardCard
                icon={<CreditCard className="h-5 w-5 text-green-600" />}
                label="入金済み"
                value="&yen;3,240,000"
                sub="回収率 87%"
              />
              <DashboardCard
                icon={<BarChart3 className="h-5 w-5 text-amber-600" />}
                label="未入金"
                value="&yen;480,000"
                sub="3件が期日超過"
              />
            </div>
            <div className="mt-6 space-y-3">
              {[
                { name: "株式会社ABC", amount: "¥120,000", status: "入金済み", color: "bg-green-100 text-green-700" },
                { name: "DEFデザイン", amount: "¥85,000", status: "入金済み", color: "bg-green-100 text-green-700" },
                { name: "GHIコンサル", amount: "¥200,000", status: "期日超過", color: "bg-red-100 text-red-700" },
                { name: "JKL商事", amount: "¥160,000", status: "未入金", color: "bg-yellow-100 text-yellow-700" },
              ].map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 px-4 py-3"
                >
                  <span className="text-sm font-medium text-neutral-700">
                    {row.name}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-neutral-600">{row.amount}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${row.color}`}
                    >
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-lg border border-neutral-100 p-4">
      <div className="flex items-center gap-2 text-neutral-500">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <p
        className="mt-2 text-2xl font-bold text-neutral-900"
        dangerouslySetInnerHTML={{ __html: value }}
      />
      <p className="mt-1 text-xs text-neutral-400">{sub}</p>
    </div>
  );
}
