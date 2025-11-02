import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Video, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AkademiePreview() {
  const features = [
    {
      icon: Video,
      title: "Video-Kurse",
      description: "Schritt-für-Schritt Anleitungen für Anfänger und Fortgeschrittene"
    },
    {
      icon: BookOpen,
      title: "Handbuch",
      description: "Umfangreiche Wissensdatenbank zu allen Themen rund um Immobilien"
    },
    {
      icon: Award,
      title: "Zertifikate",
      description: "Erhalte ein Zertifikat nach Abschluss der Kurse"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <GraduationCap className="h-5 w-5" />
            <span className="font-semibold">Kostenlose Immobilien-Akademie</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Werde zum Immobilien-Experten
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lerne alles über Immobilieninvestments – von den Grundlagen bis zu fortgeschrittenen Strategien. 
            Komplett kostenlos und ohne Vorkenntnisse.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center border-2 border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Starte jetzt deine Immobilien-Ausbildung
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Über 20 Video-Lektionen, interaktive Übungen und ein umfassendes Handbuch warten auf dich.
            Komplett kostenlos und jederzeit verfügbar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/akademie">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all h-12 px-8">
                <GraduationCap className="h-5 w-5" />
                Zur Akademie
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/handbuch">
              <Button size="lg" variant="outline" className="gap-2 h-12 px-8">
                <BookOpen className="h-5 w-5" />
                Handbuch öffnen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
