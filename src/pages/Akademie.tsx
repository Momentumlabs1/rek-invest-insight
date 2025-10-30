import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { akademieLessons } from "@/lib/educationData";
import { toast } from "sonner";

export default function Akademie() {
  const handleVideoClick = (title: string) => {
    toast.info(`Video "${title}" wird bald verfügbar sein!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 mt-16">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Kostenloser Online-Kurs
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            REK Akademie
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Lernen Sie in 7 Lektionen alles über erfolgreiche Immobilieninvestitionen
          </p>
        </div>

        {/* Lessons Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 gap-6">
            {akademieLessons.map((lesson) => (
              <Card 
                key={lesson.id}
                className="p-6 transition-all duration-300 hover:shadow-xl border-2 hover:border-primary"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Lesson Number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="text-2xl font-bold">{lesson.id}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {lesson.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {lesson.description}
                    </p>
                  </div>

                  {/* Duration & Button */}
                  <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                    <Badge variant="outline" className="gap-1">
                      <Clock className="h-3 w-3" />
                      {lesson.duration}
                    </Badge>
                    <Button 
                      className="w-full md:w-auto gap-2"
                      onClick={() => handleVideoClick(lesson.title)}
                    >
                      <PlayCircle className="h-5 w-5" />
                      Video starten
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20 max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Vom Kurs zum Plan
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Im Online-Termin arbeiten wir mit Ihren persönlichen Angaben und zeigen Ihnen 
              konkrete Investitionsmöglichkeiten, die zu Ihrer finanziellen Situation passen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/onboarding">
                <Button size="lg" className="gap-2">
                  Potenzial berechnen
                  <Sparkles className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/properties">
                <Button size="lg" variant="outline" className="gap-2">
                  Investitionsobjekte ansehen
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
