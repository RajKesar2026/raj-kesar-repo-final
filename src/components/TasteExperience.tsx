import Section from "./Section";
import mangoPulp from "@/assets/mango-pulp.jpg";

const TasteExperience = () => (
  <Section className="py-20 md:py-28 px-6 bg-secondary/30">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="rounded-2xl overflow-hidden">
        <img src={mangoPulp} alt="Rich saffron-colored Kesar mango pulp" width={1280} height={720} loading="lazy" className="w-full h-80 md:h-[28rem] object-cover" />
      </div>

      <div>
        <p className="text-primary font-sans text-sm font-semibold tracking-widest uppercase mb-4">Taste & Experience</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
          One Bite, and You'll <span className="text-primary italic">Know</span>
        </h2>

        <p className="font-sans text-muted-foreground leading-relaxed mb-6">
          Close your eyes. Imagine cutting into a perfectly ripened Kesar mango — the deep saffron pulp glistening, the aroma filling the room before the first bite even reaches your lips.
        </p>

        <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
          <div className="flex gap-4">
            <span className="text-primary text-2xl">✦</span>
            <p><span className="text-foreground font-medium">Deep saffron pulp</span> — the unmistakable signature of authentic Kesar</p>
          </div>
          <div className="flex gap-4">
            <span className="text-primary text-2xl">✦</span>
            <p><span className="text-foreground font-medium">Intoxicating aroma</span> — fragrant enough to fill an entire room</p>
          </div>
          <div className="flex gap-4">
            <span className="text-primary text-2xl">✦</span>
            <p><span className="text-foreground font-medium">Silky, fibre-free texture</span> — melts on your tongue like velvet</p>
          </div>
          <div className="flex gap-4">
            <span className="text-primary text-2xl">✦</span>
            <p><span className="text-foreground font-medium">Perfectly balanced sweetness</span> — indulgent without being overwhelming</p>
          </div>
          <div className="flex gap-4">
            <span className="text-primary text-2xl">✦</span>
            <p><span className="text-foreground font-medium">Rich in Vitamins A & C</span> — packed with antioxidants and natural goodness</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default TasteExperience;
