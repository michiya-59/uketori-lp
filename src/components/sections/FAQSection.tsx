import { FAQ_ITEMS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AccordionItem from "@/components/ui/AccordionItem";

export default function FAQSection() {
  return (
    <section id="faq" className="bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading
          tag="よくある質問"
          title="FAQ"
        />
        <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white px-6">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
