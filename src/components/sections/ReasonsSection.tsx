import Image from "next/image";
import { Check } from "lucide-react";
import { REASONS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const images = [
  {
    src: "/images/reason-01.png",
    alt: "改修管理画面",
  },
  {
    src: "/images/reason-02.png",
    alt: "明細取り込み画面",
  },
  {
    src: "/images/reason-03.png",
    alt: "データ移行画面",
  },
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="選ばれる理由"
          title="ウケトリが選ばれる3つの理由"
        />
        <div className="space-y-20">
          {REASONS.map((reason, i) => {
            const isReversed = i % 2 === 1;
            const img = images[i];
            return (
              <div
                key={reason.tag}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-lg shadow-neutral-200/50 md:p-5">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Text */}
                <div className="w-full lg:w-1/2">
                  <span className="mb-2 inline-block text-sm font-bold text-primary-600">
                    {reason.tag}
                  </span>
                  <h3 className="mb-4 text-2xl font-bold leading-snug text-neutral-900 whitespace-pre-line md:text-3xl">
                    {reason.title}
                  </h3>
                  <p className="mb-6 text-neutral-600 leading-relaxed">
                    {reason.description}
                  </p>
                  <ul className="space-y-3">
                    {reason.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-neutral-700"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
