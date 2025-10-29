import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import { Calculator } from "@/components/Calculator";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <PropertyShowcase />
      <Calculator />
      <CTA />
      <Footer />
    </div>
  );
}
