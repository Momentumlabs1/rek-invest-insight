import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import { properties } from "@/lib/propertyData";
import { MapPin, Home, Maximize, Calendar, CheckCircle, ArrowLeft } from "lucide-react";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 mt-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Immobilie nicht gefunden</h1>
          <Link to="/properties">
            <Button>Zurück zur Übersicht</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 mt-16">
        <Link to="/properties">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-2xl overflow-hidden mb-4">
              <img 
                src={property.images[0]} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={img} 
                    alt={`View ${idx + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 h-fit sticky top-24">
            <h1 className="text-3xl font-bold mb-2 text-foreground">{property.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>

            <p className="text-4xl font-bold text-primary mb-6">
              {property.price.toLocaleString('de-DE')}€
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mietrendite</span>
                <span className="font-bold text-foreground">{property.mietrendite.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">EK-Rendite</span>
                <span className="font-bold text-foreground">{property.eigenkapitalrendite.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mtl. Cashflow</span>
                <span className="font-bold text-foreground">{property.liquiditaet}€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nettogewinn (10J)</span>
                <span className="font-bold text-foreground">{property.nettogewinn.toLocaleString('de-DE')}€</span>
              </div>
            </div>

            <div className="space-y-2 mb-6 pb-6 border-t pt-6">
              <h4 className="font-semibold text-sm text-muted-foreground mb-3">Förderungen:</h4>
              {property.foerderungen.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button className="w-full h-12 text-base" size="lg">
              Beratung vereinbaren
            </Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6">
            <Home className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold mb-2 text-foreground">Wohnfläche</h3>
            <p className="text-2xl font-bold text-foreground">{property.sqm} m²</p>
            <p className="text-sm text-muted-foreground mt-1">{property.rooms} Zimmer</p>
          </Card>

          <Card className="p-6">
            <Maximize className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold mb-2 text-foreground">Stockwerk</h3>
            <p className="text-2xl font-bold text-foreground">{property.stockwerk}</p>
          </Card>

          <Card className="p-6">
            <Calendar className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-bold mb-2 text-foreground">Fertigstellung</h3>
            <p className="text-2xl font-bold text-foreground">{property.fertigstellung}</p>
            <p className="text-sm text-muted-foreground mt-1">{property.bautraeger}</p>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Objektbeschreibung</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Diese moderne {property.rooms}-Zimmer-Wohnung in {property.location} bietet 
              auf {property.sqm} m² höchsten Wohnkomfort. Die Immobilie wird nach dem 
              energieeffizienten {property.foerderungen.includes('EH40') ? 'EH40-Standard' : 'EH55-Standard'} gebaut 
              und ist damit förderfähig.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Mit einer prognostizierten Mietrendite von {property.mietrendite.toFixed(2)}% 
              und einem monatlichen Cashflow von {property.liquiditaet}€ nach Steuern ist 
              diese Immobilie eine hervorragende Kapitalanlage.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die Fertigstellung ist für {property.fertigstellung} geplant. Der renommierte 
              Bauträger {property.bautraeger} garantiert höchste Qualität und termingerechte 
              Übergabe.
            </p>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
