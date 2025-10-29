import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  image: string;
  price: number;
  title: string;
  location: string;
  rooms: number;
  sqm: number;
  mietrendite: number;
  eigenkapitalrendite: number;
  liquiditaet: number;
}

export function PropertyCard({
  id,
  image,
  price,
  title,
  location,
  rooms,
  sqm,
  mietrendite,
  eigenkapitalrendite,
  liquiditaet,
}: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`}>
      <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary hover:shadow-xl transition-all duration-300">
        <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <Badge className="absolute top-4 left-4 bg-white text-foreground border-0 shadow-md">
            <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
            {mietrendite.toFixed(2)}% Rendite
          </Badge>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            {location}
          </div>

          <h3 className="text-xl font-bold mb-1 line-clamp-2 text-foreground">{title}</h3>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              {rooms} Zi.
            </span>
            <span>•</span>
            <span>{sqm} m²</span>
          </div>

          <p className="text-3xl font-bold text-primary mb-4">
            {price.toLocaleString('de-DE')}€
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-xs text-muted-foreground mb-1">EK-Rendite</p>
              <p className="font-bold text-lg text-foreground">{eigenkapitalrendite.toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Mtl. Cashflow</p>
              <p className="font-bold text-lg text-foreground">{liquiditaet}€</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
