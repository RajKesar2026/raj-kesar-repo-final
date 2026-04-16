import { createContext, useContext, ReactNode } from "react";

const DEFAULT_NUMBER = "918247791826";
const DEFAULT_MESSAGE = "Hi, I want to order Kesar mangoes. Please share details.";

interface WhatsAppContextType {
  getWhatsAppUrl: (message?: string) => string;
}

const WhatsAppContext = createContext<WhatsAppContextType>({
  getWhatsAppUrl: (msg) => `https://wa.me/${DEFAULT_NUMBER}?text=${encodeURIComponent(msg || DEFAULT_MESSAGE)}`,
});

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const getWhatsAppUrl = (message?: string) =>
    `https://wa.me/${DEFAULT_NUMBER}?text=${encodeURIComponent(message || DEFAULT_MESSAGE)}`;

  return (
    <WhatsAppContext.Provider value={{ getWhatsAppUrl }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export const useWhatsApp = () => useContext(WhatsAppContext);
