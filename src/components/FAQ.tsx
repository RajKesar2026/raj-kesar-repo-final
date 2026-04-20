import Section from "./Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I order?", a: "Simply click any 'Order on WhatsApp' button on this page. You'll be connected directly with us on WhatsApp where you can confirm your box size, delivery address, and payment." },
  { q: "When will I receive my mangoes?", a: "We harvest and dispatch within 24 hours of your order confirmation. Delivery typically takes 1–2 days depending on your city. You'll receive a tracking update on WhatsApp." },
  { q: "How do I know when they are ripe?", a: "Our mangoes are naturally ripened and shipped at the perfect stage. We include a ripening guide with every box. Look for a golden-yellow color, sweet aroma near the stem, and slight softness to the touch." },
  { q: "Are they chemically treated?", a: "Absolutely not. We use no synthetic pesticides, no calcium carbide for ripening, and no artificial coatings. Our mangoes are grown using clean, natural farming practices." },
  { q: "What if mangoes are damaged during delivery?", a: "We pack each mango with care to prevent damage. In the rare case of damage during transit, share photos with us on WhatsApp within 24 hours and we'll arrange a replacement or refund." },
  { q: "Are your mangoes certified organic?", a: "Our mangoes are grown using 100% natural, chemical-free farming practices — no synthetic pesticides, no carbide, no artificial agents of any kind. We are first generation farmers who take immense pride in clean, honest farming. Every mango is a reflection of that commitment." },
  { q: "Why Gir Kesar and not regular Kesar mangoes?", a: "Gir, Gujarat is the ancestral home of the Kesar mango — known for its rich saffron colour, intense sweetness, and distinctive aroma. Our trees were sourced directly from Gir, ensuring you get the most authentic Kesar experience, not a generic variety grown elsewhere." },
];

const FAQ = () => (
  <Section className="py-20 md:py-28 px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-foreground">
        Frequently Asked <span className="text-primary italic">Questions</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
            <AccordionTrigger className="font-sans font-semibold text-foreground text-left hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);

export default FAQ;
