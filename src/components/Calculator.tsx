import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { calculateInvestment } from "@/lib/calculations";
import { Calculator as CalcIcon, TrendingUp, Euro, PiggyBank, FileText } from "lucide-react";

export function Calculator() {
  const [kaufpreis, setKaufpreis] = useState("280000");
  const [miete, setMiete] = useState("900");
  const [einkommen, setEinkommen] = useState("50000");
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    const calc = calculateInvestment({
      kaufpreis: Number(kaufpreis),
      wohnflaeche: 60,
      nettokaltmiete: Number(miete),
      jahreseinkommen: Number(einkommen),
      eigenkapital: 30000,
      maklerprovision: 3.57,
      grunderwerbsteuer: 5.0,
      gebaeudestandard: 'eh40',
      sonderAfA: true,
    });
    setResult(calc);
  };

  return (
    <section id="calculator" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Berechne deine Rendite
          </h2>
          <p className="text-xl text-muted-foreground">
            Finde heraus, wie viel du mit einer Immobilieninvestition verdienen kannst
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <Label className="text-base font-semibold">Kaufpreis</Label>
              <div className="relative">
                <Input
                  type="number"
                  value={kaufpreis}
                  onChange={(e) => setKaufpreis(e.target.value)}
                  className="h-14 text-lg pl-12"
                />
                <Euro className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-base font-semibold">Monatliche Miete</Label>
              <div className="relative">
                <Input
                  type="number"
                  value={miete}
                  onChange={(e) => setMiete(e.target.value)}
                  className="h-14 text-lg pl-12"
                />
                <Euro className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-base font-semibold">Jahreseinkommen</Label>
              <div className="relative">
                <Input
                  type="number"
                  value={einkommen}
                  onChange={(e) => setEinkommen(e.target.value)}
                  className="h-14 text-lg pl-12"
                />
                <Euro className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="w-full h-14 text-base shadow-lg shadow-primary/20" 
            onClick={handleCalculate}
          >
            <CalcIcon className="mr-2 h-5 w-5" />
            Jetzt berechnen
          </Button>

          {result && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Deine Ergebnisse</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-primary mb-1">
                    {result.mietrendite.toFixed(2)}%
                  </p>
                  <p className="text-sm text-muted-foreground">Mietrendite</p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <PiggyBank className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-green-600 mb-1">
                    {result.eigenkapitalrendite.toFixed(1)}%
                  </p>
                  <p className="text-sm text-muted-foreground">EK-Rendite</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <Euro className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-purple-600 mb-1">
                    {result.nettoLiquiditaetNachSteuern.toFixed(0)}€
                  </p>
                  <p className="text-sm text-muted-foreground">Mtl. Cashflow</p>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <FileText className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-orange-600 mb-1">
                    {(result.jahresSteuerersparnis / 1000).toFixed(1)}k€
                  </p>
                  <p className="text-sm text-muted-foreground">Steuerersparnis</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  📊 In 10 Jahren Nettogewinn: <span className="font-bold text-foreground">{(result.nettogewinn10Jahre / 1000).toFixed(0)}k€</span>
                </p>
              </div>
            </div>
          )}
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Beispielrechnung. Individuelle Ergebnisse können variieren. Keine Anlageberatung.
        </p>
      </div>
    </section>
  );
}
