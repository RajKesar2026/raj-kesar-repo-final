import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import GujaratOrigin from "@/components/GujaratOrigin";
import WhyDifferent from "@/components/WhyDifferent";
import Products from "@/components/Products";
import TasteExperience from "@/components/TasteExperience";
import ComparisonTable from "@/components/ComparisonTable";
import MangoGuide from "@/components/MangoGuide";
import FarmStory from "@/components/FarmStory";
import HowItWorks from "@/components/HowItWorks";
import Delivery from "@/components/Delivery";
import TrustReassurance from "@/components/TrustReassurance";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
//import PreOrderPopup from "@/components/PreOrderPopup";

const Index = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <Hero />
    <ImageCarousel />
    <div id="why-different"><WhyDifferent /></div>
    <div id="legacy"><GujaratOrigin /></div>
    <div id="taste"><TasteExperience /></div>
    <SocialProof />
    <div id="pricing"><Products /></div>
    <div id="comparison"><ComparisonTable /></div>
    <MangoGuide />
    <FarmStory />
    <div id="how-it-works"><HowItWorks /></div>
    <Delivery />
    <TrustReassurance />
    <div id="faq"><FAQ /></div>
    <FinalCTA />
    <footer className="py-8 text-center text-muted-foreground text-xs font-sans border-t border-border">
      © {new Date().getFullYear()} Raj Kesar Farms. All rights reserved.
    </footer>
    <FloatingWhatsApp />
   {/* <PreOrderPopup /> */}
  </main>
);

export default Index;
