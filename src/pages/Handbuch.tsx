import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlayCircle, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { handbuchEntries, categories, GlossaryEntry } from "@/lib/educationData";
import { toast } from "sonner";

export default function Handbuch() {
  const [selectedCategory, setSelectedCategory] = useState('Alle Kategorien');
  const [filteredEntries, setFilteredEntries] = useState<GlossaryEntry[]>(handbuchEntries);

  useEffect(() => {
    if (selectedCategory === 'Alle Kategorien') {
      setFilteredEntries(handbuchEntries);
    } else {
      setFilteredEntries(
        handbuchEntries.filter(entry => entry.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const handleVideoClick = (title: string) => {
    toast.info(`Video "${title}" wird bald verfügbar sein!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 mt-16">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Handbuch
          </h1>
          
          <p className="text-xl text-muted-foreground mb-4">
            Alles, was Sie über Investitionen wissen müssen – an einem Ort
          </p>
          
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Das strichabi-immo-demo Handbuch bietet Antworten auf Ihre Fragen und eine umfangreiche Wissensdatenbank 
            rund um Immobilieninvestitionen, Finanzierung, Steuern und rechtliche Aspekte.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-center mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue placeholder="Kategorie wählen" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
          {filteredEntries.map((entry) => (
            <Card 
              key={entry.id}
              className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl"
              onClick={() => handleVideoClick(entry.title)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img 
                  src={entry.thumbnail} 
                  alt={entry.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Duration Badge */}
                <Badge className="absolute top-3 left-3 bg-black/70 text-white border-0">
                  <Clock className="h-3 w-3 mr-1" />
                  {entry.duration}
                </Badge>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {entry.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {entry.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {entry.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20 max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Wenden Sie Ihr Wissen in der Praxis an
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bereit, Ihr neues Wissen anzuwenden? Entdecken Sie unsere handverlesenen 
              Investitionsobjekte mit Top-Renditen.
            </p>
            <Link to="/properties">
              <Button size="lg" className="gap-2">
                Investitionsobjekte ansehen
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
