import Section from "./Section";
import { MapPin, Clock, AlertTriangle, BookOpen } from "lucide-react";

const Delivery = () => (
  <Section className="py-20 md:py-28 px-6 bg-secondary/30">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">
        Currently Serving <span className="text-primary italic">Hyderabad</span>
      </h2>
      <p className="text-muted-foreground font-sans mb-12 max-w-md mx-auto">
        We limit our delivery radius to ensure every mango arrives at peak freshness. Quality over quantity — always.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="p-6 rounded-xl bg-card border border-border">
          <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">Hyderabad & Secunderabad</h3>
          <p className="text-muted-foreground text-sm font-sans">Doorstep delivery across the twin cities. More cities coming soon.</p>
        </div>
        <div className="p-6 rounded-xl bg-card border border-border">
          <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">Delivery Timeline</h3>
          <p className="text-muted-foreground text-sm font-sans">Dispatched within 24 hours of harvest. Delivered in 1–2 days.</p>
        </div>
        <div className="p-6 rounded-xl bg-card border border-border">
          <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">Limited Batches</h3>
          <p className="text-muted-foreground text-sm font-sans">We harvest in small batches daily. Pre-orders recommended.</p>
        </div>
        <div className="p-6 rounded-xl bg-card border border-border">
          <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">Ripening Guide</h3>
          <p className="text-muted-foreground text-sm font-sans">Every box includes guidance on when to eat for the best experience.</p>
        </div>
      </div>

      <div className="inline-block px-6 py-3 rounded-full border border-primary/40 text-primary text-sm font-sans font-medium">
        🥭 Pre-orders open for the current harvest batch
      </div>
    </div>
  </Section>
);

export default Delivery;
