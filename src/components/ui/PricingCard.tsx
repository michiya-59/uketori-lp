import { Check } from "lucide-react";
import type { PricingPlan } from "@/types";
import Button from "./Button";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${
        plan.popular
          ? "border-primary-600 shadow-lg shadow-primary-100"
          : "border-neutral-200"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-medium text-white">
          一番人気
        </span>
      )}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-neutral-900">{plan.name}</h3>
        <p className="mt-1 text-sm text-neutral-500">{plan.description}</p>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-bold text-neutral-900">
          &yen;{plan.price}
        </span>
        <span className="ml-2 text-sm text-neutral-500">{plan.priceNote}</span>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-neutral-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={plan.popular ? "primary" : "secondary"}
        size="lg"
        href="/apply"
        className="w-full justify-center"
      >
        {plan.cta}
      </Button>
    </div>
  );
}
