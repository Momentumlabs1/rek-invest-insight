import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AkademieSection() {
  return (
    <section id="akademie-section" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wissen & Weiterbildung
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Werden Sie zum Immobilien-Experten mit unserer kostenlosen Akademie und unserem umfangreichen Handbuch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Akademie Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Immobilien-Akademie</CardTitle>
              <CardDescription className="text-base">
                Kostenlose Video-Kurse für Einsteiger und Fortgeschrittene
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Schritt-für-Schritt Video-Anleitungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Steuervorteile optimal nutzen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Finanzierungsstrategien für maximale Rendite</span>
                </li>
              </ul>
              <Link to="/akademie">
                <Button className="w-full group-hover:shadow-md transition-shadow">
                  Zur Akademie
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Handbuch Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Immobilien-Handbuch</CardTitle>
              <CardDescription className="text-base">
                Umfassende Wissensdatenbank mit allen wichtigen Themen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Detaillierte Artikel zu allen Immobilienthemen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Checklisten und praktische Tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Fallbeispiele und Berechnungen</span>
                </li>
              </ul>
              <Link to="/handbuch">
                <Button variant="outline" className="w-full group-hover:shadow-md transition-shadow">
                  Zum Handbuch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
