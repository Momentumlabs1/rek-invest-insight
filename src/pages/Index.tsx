import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import { Calculator } from "@/components/Calculator";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { InteractiveTour } from "@/components/InteractiveTour";
import { AkademiePreview } from "@/components/AkademiePreview";
import { BookingButton } from "@/components/BookingButton";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <PropertyShowcase />
      <Calculator />
      <AkademiePreview />
      <CTA />
      <Footer />
      
      {/* Demo Features für Investor */}
      <InteractiveTour />
      <BookingButton />
    </div>
  );
}
