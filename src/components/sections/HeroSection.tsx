import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
            <Button variant="primary" size="lg" href="/apply">
              {HERO.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" href="/apply">
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

        {/* Feature image */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-xl shadow-neutral-200/50 md:p-6">
          <Image
            src="/images/feature.png"
            alt="ウケトリの機能イメージ"
            width={1600}
            height={1000}
            className="h-auto w-full rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
