import { Search, Calculator, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Entdecken",
      description: "Unsere KI analysiert täglich neue Neubau-Immobilien und zeigt dir die besten Investitionsmöglichkeiten mit höchsten Renditen."
    },
    {
      icon: Calculator,
      title: "Berechnen",
      description: "Berechne in Sekunden deine persönliche Rendite, Steuerersparnis und monatlichen Cashflow basierend auf deinem Einkommen."
    },
    {
      icon: CheckCircle,
      title: "Investieren",
      description: "Sichere dir deine Wunschimmobilie. Wir begleiten dich bei jedem Schritt - vom Kaufvertrag bis zur Schlüsselübergabe."
    }
  ];

  return (
    <section id="wie-es-funktioniert" className="py-20 px-4 bg-white scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            So einfach geht's
          </h2>
          <p className="text-xl text-muted-foreground">
            In 3 Schritten zur erfolgreichen Immobilieninvestition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">Schritt {index + 1}</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
