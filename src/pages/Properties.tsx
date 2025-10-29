import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/propertyData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = properties.filter(property =>
    property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 mt-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Investitionsobjekte
          </h1>
          <p className="text-xl text-muted-foreground">
            {properties.length} KI-analysierte Neubauimmobilien mit Top-Renditen
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Standort oder Immobilie suchen..."
              className="h-12 pl-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-12">
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              image={property.images[0]}
              price={property.price}
              title={property.title}
              location={property.location}
              rooms={property.rooms}
              sqm={property.sqm}
              mietrendite={property.mietrendite}
              eigenkapitalrendite={property.eigenkapitalrendite}
              liquiditaet={property.liquiditaet}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              Keine Immobilien gefunden. Versuche eine andere Suche.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
