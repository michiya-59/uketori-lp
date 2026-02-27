import { AlertTriangle, Clock, FileSpreadsheet } from "lucide-react";
import { PAIN_POINTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  Clock,
  FileSpreadsheet,
};

export default function PainPointsSection() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="課題"
          title="こんなお悩みありませんか？"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map((point) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                  {Icon && <Icon className="h-6 w-6 text-red-500" />}
                </div>
                <h3 className="mb-3 text-lg font-bold text-neutral-900">
                  {point.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
