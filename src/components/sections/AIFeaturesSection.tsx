import { Brain, ScanLine, Lightbulb } from "lucide-react";
import { AI_FEATURES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  ScanLine,
  Lightbulb,
};

export default function AIFeaturesSection() {
  return (
    <section id="ai-features" className="bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="AI機能"
          title="AIがバックオフィスを変える"
          subtitle="3つのAI機能が、これまで手作業だった業務を自動化・効率化します。"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {AI_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={feature.title}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                  {Icon && <Icon className="h-6 w-6 text-primary-600" />}
                </div>
                <h3 className="mb-3 text-lg font-bold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
