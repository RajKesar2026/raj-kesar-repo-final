import Section from "./Section";
import { Eye, Wind, Hand, Utensils, Layers } from "lucide-react";

const senses = [
  { icon: Eye, title: "Sight", desc: "Look for a golden-yellow skin with a slight orange blush. Minor wrinkles near the stem signal ripeness.", color: "text-primary" },
  { icon: Wind, title: "Smell", desc: "A ripe Kesar mango has a strong, sweet aroma near the stem — the hallmark of natural ripening.", color: "text-primary" },
  { icon: Hand, title: "Touch", desc: "Gently press — it should yield slightly like a ripe peach. Too firm means unripe; mushy means overripe.", color: "text-primary" },
  { icon: Utensils, title: "Taste", desc: "Expect a balanced sweetness with floral notes. No sour aftertaste — just rich, clean mango flavour.", color: "text-primary" },
  { icon: Layers, title: "Texture", desc: "The pulp should be smooth and creamy with minimal fibres — a signature of the Kesar variety.", color: "text-primary" },
];

const MangoGuide = () => (
  <Section className="py-20 md:py-28 px-6">
    <div className="max-w-5xl mx-auto">
      <p className="text-primary font-sans text-sm font-semibold tracking-widest uppercase text-center mb-4">Mango 101</p>
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground">
        How to Identify a <span className="text-primary italic">Good Mango</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto font-sans">
        Use your senses — here's what to look for in a naturally ripened Kesar mango.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {senses.map((s) => (
          <div key={s.title} className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default MangoGuide;
