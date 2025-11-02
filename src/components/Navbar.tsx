import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Building2, Menu, X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">strichabi-immo-demo</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/properties" 
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Immobilien
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Schulung
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <Link to="/akademie">
                        <div className="px-4 py-3 rounded-md hover:bg-accent transition-colors cursor-pointer">
                          <p className="font-medium text-sm">Akademie</p>
                          <p className="text-xs text-muted-foreground">Video-Kurs</p>
                        </div>
                      </Link>
                      <Link to="/handbuch">
                        <div className="px-4 py-3 rounded-md hover:bg-accent transition-colors cursor-pointer">
                          <p className="font-medium text-sm">Handbuch</p>
                          <p className="text-xs text-muted-foreground">Video-Glossar</p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a 
              href="#rechner" 
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Rechner
            </a>
            <a 
              href="#wie-es-funktioniert" 
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              So geht's
            </a>
          </div>

          <div className="hidden md:block">
            <Button size="sm" className="h-9 gap-2" onClick={handleBooking}>
              <Calendar className="h-4 w-4" />
              Termin buchen
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link 
                to="/properties" 
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Immobilien
              </Link>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Schulung</p>
                <Link 
                  to="/akademie" 
                  className="text-sm font-medium pl-4 block"
                  onClick={() => setIsOpen(false)}
                >
                  Akademie
                </Link>
                <Link 
                  to="/handbuch" 
                  className="text-sm font-medium pl-4 block"
                  onClick={() => setIsOpen(false)}
                >
                  Handbuch
                </Link>
              </div>
              
              <a 
                href="#rechner" 
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Rechner
              </a>
              <a 
                href="#wie-es-funktioniert" 
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                So geht's
              </a>
              <Button size="sm" className="w-full gap-2" onClick={handleBooking}>
                <Calendar className="h-4 w-4" />
                Termin buchen
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
