import Section from "./Section";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import WhatsAppIcon from "./WhatsAppIcon";

const FinalCTA = () => {
  const { getWhatsAppUrl } = useWhatsApp();
  return (
    <Section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
          Limited Harvest.{" "}
          <span className="text-primary italic">Experience Kesar This Season.</span>
        </h2>
        <p className="text-muted-foreground font-sans mb-10 max-w-md mx-auto leading-relaxed">
          Our trees produce a finite harvest each season. Once it's gone, it's gone.
          Don't miss this season's finest Kesar mangoes from Raj Kesar Farms.
        </p>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-semibold font-sans hover:brightness-110 transition-all shadow-xl shadow-primary/20"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Order on WhatsApp
        </a>

        <div className="flex items-center justify-center gap-6 mt-8 text-muted-foreground text-sm font-sans">
          <span>🌿 Fresh harvest</span>
          <span>·</span>
          <span>🤝 No middlemen</span>
          <span>·</span>
          <span>🚜 Direct from our farm</span>
        </div>
      </div>
    </Section>
  );
};

export default FinalCTA;
