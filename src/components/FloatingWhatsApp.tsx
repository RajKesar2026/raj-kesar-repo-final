import { useWhatsApp } from "@/hooks/useWhatsApp";
import WhatsAppIcon from "./WhatsAppIcon";

const FloatingWhatsApp = () => {
  const { getWhatsAppUrl } = useWhatsApp();
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform"
      aria-label="Order on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsApp;
