import Section from "./Section";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import WhatsAppIcon from "./WhatsAppIcon";
import { Package } from "lucide-react";

const products = [
  { weight: "2 kg", count: "6–8 mangoes", oldPrice: "₹600", price: "₹499", perKg: "₹249/kg", label: "Trial Pack", note: "Perfect for trying", message: "Hi, I want to order the 2kg Trial Pack of Kesar mangoes. Please share details." },
  { weight: "5 kg", count: "15–20 mangoes", oldPrice: "₹1,500", price: "₹999", perKg: "₹199/kg", label: "Family Box", note: "Best value for families", featured: true, message: "Hi, I want to order the 5kg Most Popular Pack of Kesar mangoes. Please share details." },
  { weight: "10 kg", count: "30–40 mangoes", oldPrice: "₹3,000", price: "₹1,799", perKg: "₹179/kg", label: "Grand Box", note: "Best for sharing", message: "Hi, I want to order the 10kg Grand Box of Kesar mangoes. Please share details." },
  ]
const Products = () => {
  const { getWhatsAppUrl } = useWhatsApp();

  return (
    <Section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground">
          Choose Your <span className="text-primary italic">Box</span>
        </h2>
        <p className="text-muted-foreground text-center mb-6 max-w-md mx-auto font-sans">
          Choose your box of sun-ripened Kesar mangoes
        </p>
        <p className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground bg-card border border-border rounded-full px-4 py-2">
            <Package className="w-4 h-4 text-primary" />
            Carefully harvested and packed for the best experience
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.label}
              className={`relative rounded-2xl p-8 text-center border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${
                p.featured
                  ? "bg-card border-primary shadow-lg shadow-primary/10"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-sans font-semibold px-4 py-1 rounded-full">
                  Most Popular ⭐
                </span>
              )}
              <p className="text-muted-foreground text-sm font-sans mb-2">{p.note}</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{p.label}</h3>
              <p className="text-muted-foreground font-sans mb-1">{p.weight} ({p.count})</p>
              <div className="mb-1">
                <span className="text-muted-foreground text-lg font-sans line-through mr-2">{p.oldPrice}</span>
                <span className="font-serif text-4xl font-bold text-primary">{p.price}</span>
              </div>
              <p className="text-muted-foreground text-xs font-sans mb-1">Inclusive of delivery</p>
              <p className="text-primary text-sm font-sans font-semibold mb-8">{p.perKg} 🥭</p>
              <p className="text-xs font-sans font-semibold text-red-500 mb-8 animate-pulse">
                🔥 Limited stock this season — selling fast!
              </p>

              <a
                href={getWhatsAppUrl(p.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <WhatsAppIcon className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-sans font-semibold hover:underline"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Have questions? Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Products;
