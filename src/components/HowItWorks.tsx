import Section from "./Section";
import { MessageCircle, ClipboardCheck, Trees, Package } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Message Us", desc: "Reach out on WhatsApp" },
  { icon: ClipboardCheck, title: "Confirm Order", desc: "Choose your box & confirm" },
  { icon: Trees, title: "Fresh Harvest", desc: "We handpick from our farm" },
  { icon: Package, title: "Delivered Fresh", desc: "At your doorstep in 48 hrs" },
];

const HowItWorks = () => (
  <Section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-foreground">
        How It <span className="text-primary italic">Works</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={s.title} className="text-center">
            <div className="relative w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-6 h-6 text-primary" />
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-sans font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-serif text-base font-semibold mb-1 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-sans">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default HowItWorks;
