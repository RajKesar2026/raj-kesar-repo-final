import Section from "./Section";
import { ShieldCheck, Award, Truck, MapPin, Sun } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "No Harmful Chemicals", desc: "Clean, natural farming — no synthetic pesticides or ripening agents" },
  { icon: Award, title: "GI-Tag Lineage", desc: "Trees sourced from Gir, Gujarat — the birthplace of Kesar mangoes" },
  { icon: Truck, title: "Direct from Raj Kesar Farms", desc: "No middlemen, no cold storage — straight from our trees to your table" },
  { icon: MapPin, title: "Just 200 km Away", desc: "Grown in nutrient-rich red soil, just 200 km from Hyderabad" },
  { icon: Sun, title: "Naturally Ripened", desc: "Sun-kissed and tree-ripened — no calcium carbide, ever" },
];

const WhyDifferent = () => (
  <Section className="py-20 md:py-28 px-6 bg-secondary/30">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground">
        Why Our Mangoes Are <span className="text-primary italic">Different</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto font-sans">
        Every box is a promise of purity, freshness, and authentic Kesar flavour.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((f) => (
          <div key={f.title} className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default WhyDifferent;
