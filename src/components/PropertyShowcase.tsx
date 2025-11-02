import { properties } from "@/lib/propertyData";
import { PropertyCard } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PropertyShowcase() {
  const featured = properties.slice(0, 3);

  return (
    <section id="properties" className="py-20 px-4 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Aktuelle Investitionsobjekte
            </h2>
            <p className="text-xl text-muted-foreground">
              Von unserer KI analysiert und empfohlen
            </p>
          </div>
          <Link to="/properties">
            <Button variant="ghost" className="gap-2">
              Alle ansehen
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
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
      </div>
    </section>
  );
}
