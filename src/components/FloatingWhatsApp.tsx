import { useWhatsApp } from "@/hooks/useWhatsApp";
import WhatsAppIcon from "./WhatsAppIcon";

const FloatingWhatsApp = () => {
  const { getWhatsAppUrl } = useWhatsApp();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 hover:shadow-xl transition-all duration-200"
        aria-label="Order on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/raj_kesar_2022/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
        style={{ background: "radial-gradient(circle at 30% 107%, #ffd600 0%, #ff0069 50%, #7638fa 100%)" }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" strokeWidth="3" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
