import { UserPlus, Settings, Rocket } from "lucide-react";
import { STEPS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UserPlus,
  Settings,
  Rocket,
};

export default function HowToStartSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="かんたん導入"
          title="最短1分で始められます"
          subtitle="3つのステップですぐに運用を開始できます。"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.number} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div className="absolute top-8 left-1/2 hidden h-0.5 w-full bg-neutral-200 md:block" />
                )}
                <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100">
                  {Icon && <Icon className="h-7 w-7 text-primary-600" />}
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
