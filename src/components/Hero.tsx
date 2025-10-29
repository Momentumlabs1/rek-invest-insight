import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium mb-8 border border-blue-100">
          <Sparkles className="h-4 w-4" />
          KI-gestützte Immobilienanalyse
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground">
          Investieren.<br />
          Intelligent.<br />
          Einfach.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          REK analysiert Neubauimmobilien mit künstlicher Intelligenz und zeigt dir 
          die besten Investitionsmöglichkeiten. Ab 200€ monatlich.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/properties">
            <Button size="lg" className="text-base h-14 px-8 shadow-lg shadow-primary/20">
              Immobilien entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base h-14 px-8"
            onClick={() => document.getElementById('rechner')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Rendite berechnen
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t max-w-3xl mx-auto">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">3,5%+</p>
            <p className="text-sm text-muted-foreground">Mietrendite p.a.</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">150.000€</p>
            <p className="text-sm text-muted-foreground">KfW-Förderung möglich</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">200€</p>
            <p className="text-sm text-muted-foreground">Ab monatlich</p>
          </div>
        </div>
      </div>
    </section>
  );
}
