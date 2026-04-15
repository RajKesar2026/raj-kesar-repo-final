import { useRef, useState } from "react";
import Section from "./Section";
import carouselOrchard from "@/assets/carousel-orchard.jpg";
import carouselMangoes from "@/assets/carousel-mangoes.jpg";
import carouselPulp from "@/assets/carousel-pulp.jpg";
import carouselHarvest from "@/assets/carousel-harvest.jpg";
import carouselPackaging from "@/assets/carousel-packaging.jpg";

const slides = [
  { src: carouselOrchard, alt: "Lush Kesar mango orchard bathed in golden sunlight", caption: "Our Orchard" },
  { src: carouselMangoes, alt: "Ripe golden Kesar mangoes on the tree", caption: "Sun-Ripened Kesar" },
  { src: carouselPulp, alt: "Rich saffron-colored Kesar mango pulp", caption: "The Golden Pulp" },
  { src: carouselHarvest, alt: "Farm workers hand-picking mangoes", caption: "Harvest Day" },
  { src: carouselPackaging, alt: "Premium mango box packaging", caption: "Ready for You" },
];

const ImageCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement;
    child?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const childWidth = el.children[0]?.clientWidth || 1;
    setActive(Math.round(scrollLeft / childWidth));
  };

  return (
    <Section className="py-16 md:py-24">
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-10 text-foreground">
        From Orchard to <span className="text-primary italic">Your Table</span>
      </h2>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-4 no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map((s, i) => (
          <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] relative rounded-2xl overflow-hidden">
            <img src={s.src} alt={s.alt} width={1280} height={720} loading="lazy" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/60 to-transparent p-4">
              <p className="font-serif text-lg text-background font-medium">{s.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? "bg-primary w-6" : "bg-border"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default ImageCarousel;
