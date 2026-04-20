import Section from "./Section";
import gujaratOrigin from "@/assets/gujarat-origin.jpg";

const GujaratOrigin = () => (
  <Section className="py-20 md:py-28 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-primary font-sans text-sm font-semibold tracking-widest uppercase mb-4">Heritage & Origin</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground leading-tight">
          The Legacy of <span className="text-primary italic">Gir</span>, Now Grown Closer to Home
        </h2>
        <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
          <p>
            Kesar mangoes were born in the Gir region of Gujarat — a land whose soil, sun, and air gave the world one of its most prized fruits. The GI-tagged Kesar is celebrated for its saffron pulp and unmistakable aroma.
          </p>
          <p>
            At Raj Kesar Farms, we brought this legacy closer to you. Our trees, sourced from Gir's finest nurseries, now flourish in Karnataka's nutrient-rich red soil — just 200 km from Hyderabad. Same lineage. Same soul. Fresher than ever.
          </p>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-primary">GI-Tag</p>
            <p className="text-muted-foreground text-xs font-sans mt-1">Certified Lineage</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-primary">200 km</p>
            <p className="text-muted-foreground text-xs font-sans mt-1">From Hyderabad</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-primary">100%</p>
            <p className="text-muted-foreground text-xs font-sans mt-1">Natural Farming</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden">
        <img src={gujaratOrigin} alt="Authentic Gir Gujarat origin Kesar mango trees" width={1280} height={720} loading="lazy" className="w-full h-80 md:h-[28rem] object-cover" />
      </div>
    </div>
  </Section>
);

export default GujaratOrigin;
