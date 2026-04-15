import Section from "./Section";
import { Check, Star } from "lucide-react";

const varieties = [
  { name: "Banganpally", taste: "Mild", sweetness: "Medium", aroma: "Low", texture: "Slightly fibrous", price: "₹100-200/kg", availability: "Wide" },
  { name: "Kesar", taste: "Rich", sweetness: "High", aroma: "Strong", texture: "Smooth, creamy", price: "₹240-350/kg", availability: "Seasonal", highlight: true },
  { name: "Alphonso", taste: "Rich", sweetness: "High", aroma: "Very Strong", texture: "Buttery smooth", price: "₹400-500/kg", availability: "Limited" },
];

const params = ["taste", "sweetness", "aroma", "texture", "price", "availability"] as const;
const paramLabels: Record<string, string> = { taste: "Taste Richness", sweetness: "Sweetness", aroma: "Aroma", texture: "Texture", price: "Price Range", availability: "Availability" };

const ComparisonTable = () => (
  <Section className="py-20 md:py-28 px-6 bg-secondary/30">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground">
        How Kesar <span className="text-primary italic">Compares</span>
      </h2>
      <p className="text-muted-foreground text-center mb-4 max-w-lg mx-auto font-sans">
        Kesar offers the richness of Alphonso with the accessibility of Banganpally.
      </p>
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-sans font-medium px-4 py-1.5 rounded-full">
          <Star className="w-3.5 h-3.5" /> Best balance of taste, aroma & price
        </span>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm font-sans">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-4 text-muted-foreground font-medium">Parameter</th>
              {varieties.map((v) => (
                <th key={v.name} className={`p-4 text-center font-semibold ${v.highlight ? "text-primary bg-primary/5" : "text-foreground"}`}>
                  {v.name}
                  {v.highlight && <Check className="w-4 h-4 inline ml-1" />}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {params.map((p) => (
              <tr key={p} className="border-t border-border">
                <td className="p-4 text-muted-foreground font-medium">{paramLabels[p]}</td>
                {varieties.map((v) => (
                  <td key={v.name} className={`p-4 text-center ${v.highlight ? "bg-primary/5 font-medium text-foreground" : "text-muted-foreground"}`}>
                    {v[p]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {varieties.map((v) => (
          <div key={v.name} className={`rounded-xl border p-5 ${v.highlight ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
            <h3 className={`font-serif text-xl font-bold mb-3 ${v.highlight ? "text-primary" : "text-foreground"}`}>
              {v.name} {v.highlight && <Check className="w-4 h-4 inline" />}
            </h3>
            <div className="space-y-2 text-sm font-sans">
              {params.map((p) => (
                <div key={p} className="flex justify-between">
                  <span className="text-muted-foreground">{paramLabels[p]}</span>
                  <span className="text-foreground font-medium">{v[p]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default ComparisonTable;
