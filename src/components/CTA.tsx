import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <Sparkles className="h-12 w-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit für deine erste Investition?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Starte jetzt mit nur 200€ monatlich und sichere dir steueroptimierte Renditen 
              von über 3,5% pro Jahr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="h-14 px-8 text-base shadow-xl"
              >
                Kostenlos beraten lassen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/properties">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-base bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Immobilien ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
