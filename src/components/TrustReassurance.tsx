import Section from "./Section";
import { BookOpen, MessageCircle, Package, Trees } from "lucide-react";

const blocks = [
  { icon: BookOpen, title: "Ripening Guidance Included", desc: "Every box comes with simple instructions on when and how to eat your mangoes at peak ripeness." },
  { icon: MessageCircle, title: "WhatsApp Support", desc: "Have questions after delivery? Chat with us anytime — we're here to help you enjoy every mango." },
  { icon: Package, title: "Carefully Packed", desc: "Each mango is individually cushioned to prevent bruising during transit." },
  { icon: Trees, title: "Direct from Raj Kesar Farms", desc: "No middlemen, no warehouses. Your mangoes travel directly from our trees to your doorstep." },
];

const TrustReassurance = () => (
  <Section className="py-20 md:py-28 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground">
        Your Experience <span className="text-primary italic">Matters</span>
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto font-sans">
        We don't just deliver mangoes — we ensure you enjoy them at their best.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blocks.map((b) => (
          <div key={b.title} className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{b.title}</h3>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default TrustReassurance;
