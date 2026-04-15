import heroImg from "@/assets/hero-mangoes.jpg";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import WhatsAppIcon from "./WhatsAppIcon";

const Hero = () => {
  const { getWhatsAppUrl } = useWhatsApp();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Premium Kesar mangoes with rich saffron pulp" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-32">
        <p className="font-serif text-lg sm:text-xl text-primary font-semibold tracking-wide mb-6">
          Raj Kesar Farms
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
          Not Just Mangoes.{" "}
          <span className="text-primary italic">The Kesar Experience.</span>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-4 font-sans leading-relaxed">
          Sun-ripened Kesar mangoes from Gir lineage, grown with care in Karnataka and delivered fresh to Hyderabad.
        </p>

        <p className="text-foreground/70 text-sm font-sans mb-8">
          ✦ Ripening guidance and support included
        </p>

        <span className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary-foreground text-xs font-sans tracking-widest uppercase mb-8 shadow-sm">
          Limited Harvest · Seasonal Availability
        </span>

        <div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold font-sans hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
