import { Building2, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-foreground">REK</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-4">
              Real Estate Kovin - Ihre professionelle Plattform für intelligente 
              Immobilieninvestitionen mit KI-Unterstützung.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Leipzig, Deutschland</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@rek-invest.de" className="hover:text-primary transition">
                  info@rek-invest.de
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+491234567890" className="hover:text-primary transition">
                  +49 (0) 123 456 7890
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Plattform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/properties" className="hover:text-primary transition">
                  Immobilien
                </Link>
              </li>
              <li>
                <Link to="/akademie" className="hover:text-primary transition">
                  Akademie
                </Link>
              </li>
              <li>
                <Link to="/handbuch" className="hover:text-primary transition">
                  Handbuch
                </Link>
              </li>
              <li>
                <a href="#rechner" className="hover:text-primary transition">
                  Rechner
                </a>
              </li>
              <li>
                <a href="#wie-es-funktioniert" className="hover:text-primary transition">
                  So geht's
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 REK - Real Estate Kovin. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
