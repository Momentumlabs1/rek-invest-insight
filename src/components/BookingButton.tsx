import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function BookingButton() {
  const handleBooking = () => {
    // Für Demo: WhatsApp öffnen
    const phoneNumber = "491234567890"; // Placeholder - später durch echte Nummer ersetzen
    const message = encodeURIComponent(
      "Hallo! Ich interessiere mich für eine kostenlose Beratung zum Thema Immobilieninvestment. Können wir einen Termin vereinbaren?"
    );
    
    // In Produktion würde hier Calendly oder ein Booking-System öffnen
    toast.success("Terminbuchung wird geöffnet...", {
      description: "In der finalen Version wird hier ein Kalendersystem integriert."
    });
    
    // Demo: WhatsApp öffnen
    // window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    
    // Oder für Demo einfach Email öffnen
    window.location.href = `mailto:info@strichabi-demo.de?subject=Beratungstermin&body=${message}`;
  };

  return (
    <>
      {/* Desktop: Floating Button */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <Button
          onClick={handleBooking}
          size="lg"
          className="shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 gap-3 text-base h-14 px-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
        >
          <Calendar className="h-5 w-5" />
          Kostenlose Beratung buchen
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile: Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-4 shadow-lg">
        <Button
          onClick={handleBooking}
          size="lg"
          className="w-full gap-2 h-12 bg-gradient-to-r from-primary to-blue-600"
        >
          <Calendar className="h-5 w-5" />
          Beratung buchen
        </Button>
      </div>
    </>
  );
}
