import Section from "./Section";
import farmImg from "@/assets/farm-story.jpg";

const FarmStory = () => (
  <Section className="py-20 md:py-28 px-6 bg-secondary/30">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <span className="text-primary text-xs font-sans tracking-widest uppercase mb-4 block">Our Story</span>
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
          Rooted in <span className="text-primary italic">Authenticity</span>
        </h2>

        <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
          <p>
            Raj Kesar Farms sits about 200 kilometres from Hyderabad, in Karnataka's red soil belt — a climate so similar to Gir, Gujarat that it produces mangoes of equal richness and flavour. Our trees were sourced directly from Gir, Gujarat — the ancestral home of the Kesar mango — ensuring every fruit carries that authentic Gir lineage, grown naturally in Karnataka's ideal conditions.
          </p>
          <p>
            We follow clean, natural farming practices. No harmful chemicals, no artificial ripening agents. Every mango is allowed to mature on the tree, handpicked at the perfect moment, and packed with care within hours of harvest.
          </p>
          <p className="text-foreground font-medium">
            This isn't a business built on scale. It's a labour of love — and every box reflects that.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { icon: "🌱", label: "First Generation Farmers" },
              { icon: "🌳", label: "Gir Sourced Trees" },
              { icon: "🤝", label: "Direct from Farm" },
              { icon: "❤️", label: "Grown with Love" },
            ].map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-foreground text-xs font-sans font-semibold"
              >
                {badge.icon} {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 rounded-2xl overflow-hidden">
        <img src={farmImg} alt="First generation Kesar mango farmers Gir Gujarat" width={1280} height={720} loading="lazy" className="w-full h-80 md:h-[28rem] object-cover" />
      </div>
    </div>
  </Section>
);

export default FarmStory;
