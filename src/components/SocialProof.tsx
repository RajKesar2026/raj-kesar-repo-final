import Section from "./Section";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya R.", city: "Jubilee Hills", text: "The best mangoes I've ever tasted. You can tell they're naturally ripened — the sweetness is unreal." },
  { name: "Arjun M.", city: "Madhapur", text: "Ordered for my family. Everyone loved them. The packaging was immaculate and they arrived perfectly ripe." },
  { name: "Sneha K.", city: "Bowrampet", text: "I've been buying mangoes for years but this Kesar quality is on another level. Already pre-ordered my next box!" },
];

const SocialProof = () => (
  <Section className="py-20 md:py-28 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground">
        What Our <span className="text-primary italic">Customers</span> Say
      </h2>
      <p className="text-center text-primary font-sans font-semibold mb-12">
        100+ boxes delivered last season
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 rounded-xl bg-card border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">"{t.text}"</p>
            <p className="text-foreground font-sans font-semibold text-sm">{t.name}</p>
            <p className="text-muted-foreground text-xs font-sans">{t.city}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default SocialProof;
