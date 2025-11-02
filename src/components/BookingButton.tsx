import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function BookingButton() {
  const handleBooking = () => {
    // Öffne Email Client für Buchung
    const email = "info@strichabi-immo.de";
    const subject = "Terminanfrage - Kostenlose Beratung";
    const body = "Hallo,%0D%0A%0D%0AIch interessiere mich für eine kostenlose Beratung zu Immobilieninvestments.%0D%0A%0D%0ABitte kontaktieren Sie mich für einen Termin.%0D%0A%0D%0AMit freundlichen Grüßen";
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    toast.success("Email-Client wird geöffnet", {
      description: "Wir melden uns schnellstmöglich bei Ihnen!"
    });
  };

  return (
    <>
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
