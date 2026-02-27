import { Building2, Quote } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="導入事例"
          title="導入企業の声"
          subtitle="ウケトリを導入いただいた企業様の実際の成果をご紹介します。"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <Card key={cs.company}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                  <Building2 className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">
                    {cs.company}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {cs.industry} / {cs.size}
                  </p>
                </div>
              </div>
              <div className="relative mb-4">
                <Quote className="absolute -top-1 -left-1 h-6 w-6 text-primary-200" />
                <p className="pl-6 text-sm text-neutral-600 leading-relaxed">
                  {cs.quote}
                </p>
              </div>
              <div className="rounded-lg bg-primary-50 px-4 py-3">
                <p className="text-sm font-bold text-primary-700">
                  {cs.result}
                </p>
              </div>
              <p className="mt-3 text-right text-xs text-neutral-400">
                {cs.person}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
