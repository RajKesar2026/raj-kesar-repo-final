import { useState } from "react";
import Section from "./Section";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import WhatsAppIcon from "./WhatsAppIcon";
import { Package, Tag, CheckCircle, XCircle } from "lucide-react";

const products = [
  { weight: "2 kg", count: "6–8 mangoes", oldPrice: "₹600", price: 499, perKg: "₹249/kg", label: "Trial Pack", note: "Perfect for trying", message: "Hi, I want to order the 2kg Trial Pack of Kesar mangoes. Please share details." },
  { weight: "5 kg", count: "15–20 mangoes", oldPrice: "₹1,500", price: 999, perKg: "₹199/kg", label: "Family Box", note: "Best value for families", featured: true, message: "Hi, I want to order the 5kg Most Popular Pack of Kesar mangoes. Please share details." },
  { weight: "10 kg", count: "30–40 mangoes", oldPrice: "₹3,000", price: 1799, perKg: "₹179/kg", label: "Grand Box", note: "Best for sharing", message: "Hi, I want to order the 10kg Grand Box of Kesar mangoes. Please share details." },
];

const COUPONS: Record<string, { discount: number; label: string }> = {
  KEERTHI25: { discount: 25, label: "Keerthi Homes — 25% off applied! 🎉" },
  REDDIT20:  { discount: 20, label: "Reddit Community — 20% off applied! 🎉" },
};

const formatPrice = (price: number) =>
  "₹" + Math.round(price).toLocaleString("en-IN");

const Products = () => {
  const { getWhatsAppUrl } = useWhatsApp();
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<null | { code: string; discount: number; label: string }>(null);
  const [couponError, setCouponError] = useState("");

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (COUPONS[code]) {
      setAppliedCoupon({ code, ...COUPONS[code] });
      setCouponError("");
    } else {
      setAppliedCoupon(null);
      setCouponError("Invalid coupon code. Please try again.");
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput("");
    setCouponError("");
  };

  const getDiscountedPrice = (price: number) => {
    if (!appliedCoupon) return price;
    return price * (1 - appliedCoupon.discount / 100);
  };

  const getWhatsAppMessage = (p: typeof products[0]) => {
    if (!appliedCoupon) return p.message;
    return `${p.message} Coupon code applied: ${appliedCoupon.code} (${appliedCoupon.discount}% off). Discounted price: ${formatPrice(getDiscountedPrice(p.price))}.`;
  };

  return (
    <Section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground">
          Choose Your <span className="text-primary italic">Box</span>
        </h2>
        <p className="text-muted-foreground text-center mb-6 max-w-md mx-auto font-sans">
          Choose your box of sun-ripened Kesar mangoes
        </p>
        <p className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground bg-card border border-border rounded-full px-4 py-2">
            <Package className="w-4 h-4 text-primary" />
            Carefully harvested and packed for the best experience
          </span>
        </p>

        {/* Coupon Code Section */}
        <div className="max-w-md mx-auto mb-14 bg-card border border-border rounded-2xl p-6">
          <p className="text-sm font-sans font-semibold text-foreground mb-3 flex items-center gap-2">
            <Tag className="w-4 h-4 text-primary" />
            Have a coupon code?
          </p>

          {!appliedCoupon ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={couponInput}
                onChange={(e) => { setCouponInput(e.target.value); setCouponError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                placeholder="Enter code"
                className="flex-1 border border-border rounded-full px-4 py-2 text-sm font-sans bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-sans font-semibold hover:brightness-110 transition-all"
              >
                Apply
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <span className="flex items-center gap-2 text-sm font-sans text-green-700 font-semibold">
                <CheckCircle className="w-4 h-4" />
                {appliedCoupon.label}
              </span>
              <button onClick={handleRemoveCoupon} className="text-muted-foreground hover:text-red-500 transition-colors">
                <XCircle className="w-4 h-4" />
              </button>
            </div>
          )}

          {couponError && (
            <p className="text-red-500 text-xs font-sans mt-2 ml-2">{couponError}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => {
            const discountedPrice = getDiscountedPrice(p.price);
            const isDiscounted = appliedCoupon !== null;

            return (
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
                  {isDiscounted ? (
                    <span>
                      <span className="text-muted-foreground text-xl font-sans line-through mr-2">{formatPrice(p.price)}</span>
                      <span className="font-serif text-4xl font-bold text-green-600">{formatPrice(discountedPrice)}</span>
                    </span>
                  ) : (
                    <span className="font-serif text-4xl font-bold text-primary">{formatPrice(p.price)}</span>
                  )}
                </div>

                {isDiscounted && (
                  <p className="text-green-600 text-xs font-sans font-semibold mb-1">
                    🎉 {appliedCoupon.discount}% off applied!
                  </p>
                )}

                <p className="text-muted-foreground text-xs font-sans mb-1">Inclusive of delivery</p>
                <p className="text-primary text-sm font-sans font-semibold mb-4">{p.perKg} 🥭</p>
                <p className="text-xs font-sans font-semibold text-red-500 mb-6 animate-pulse">
                  🔥 Limited stock this season — selling fast!
                </p>

                <button
                  onClick={() => window.open(getWhatsAppUrl(getWhatsAppMessage(p)), '_blank')}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all ${
                    p.featured
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Order on WhatsApp
                </button>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {["UPI", "GPay", "PhonePe"].map((method) => (
                    <span
                      key={method}
                      className="text-xs font-sans text-muted-foreground bg-background border border-border rounded-full px-3 py-1"
                    >
                      {method}
                    </span>
                  ))}
                  <span className="text-xs font-sans text-muted-foreground bg-background border border-border rounded-full px-3 py-1">
                    COD <span className="text-primary font-semibold">*select areas</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.open(getWhatsAppUrl(), '_blank')}
            className="inline-flex items-center gap-2 text-primary font-sans font-semibold hover:underline"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Have questions? Chat with us on WhatsApp
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Products;
