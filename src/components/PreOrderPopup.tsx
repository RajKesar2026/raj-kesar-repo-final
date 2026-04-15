import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import WhatsAppIcon from "./WhatsAppIcon";

const PreOrderPopup = () => {
  const [open, setOpen] = useState(false);
  const { getWhatsAppUrl } = useWhatsApp();

  useEffect(() => {
    if (sessionStorage.getItem("popup_shown")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("popup_shown", "1");
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md rounded-2xl border-border bg-card p-8 text-center">
        <DialogHeader className="items-center">
          <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground">
            Pre-order Your Box of Organic Kesar Mangoes
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-sans mt-3 leading-relaxed">
            Harvest begins from 1st May. Limited stock available.
          </DialogDescription>
        </DialogHeader>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold font-sans hover:brightness-110 transition-all shadow-lg shadow-primary/20 mt-4"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Order on WhatsApp
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default PreOrderPopup;
