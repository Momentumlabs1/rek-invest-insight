export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoUrl?: string;
}

export interface GlossaryEntry {
  id: string;
  title: string;
  description: string;
  category: 'Finanzierung' | 'Steuern' | 'Kaufprozess' | 'Bewertung' | 'Recht';
  duration: string;
  thumbnail: string;
  videoUrl?: string;
}

export const akademieLessons: Lesson[] = [
  {
    id: 1,
    title: "Die häufigsten Fragen beim Wohnungskauf",
    description: "Was man vor dem Wohnungskauf wissen sollte?",
    duration: "3 min"
  },
  {
    id: 2,
    title: "Eigenschaften einer Top-Anlageimmobilie",
    description: "Optimale Lage, Wohnungsgröße, Gewährleistungsgarantie, Instandhaltungskosten",
    duration: "3 min"
  },
  {
    id: 3,
    title: "Kaufpreis und Mietrendite",
    description: "Wann ist der Preis einer Investitionswohnung fair? Was ist die Mietrendite?",
    duration: "3 min"
  },
  {
    id: 4,
    title: "Finanzierung",
    description: "Wie reduziere ich die Finanzierungskosten?",
    duration: "7 min"
  },
  {
    id: 5,
    title: "Steuerliche Förderung",
    description: "Wie bekomme ich die höchste steuerliche Förderung (lineare-, degressive-‚ und Sonder-AfA)",
    duration: "10 min"
  },
  {
    id: 6,
    title: "Investment und Gewinn",
    description: "Meine Finanz- und Liquiditätssituation. Möglicher Gewinn nach 10 oder mehr Jahren.",
    duration: "8 min"
  },
  {
    id: 7,
    title: "Zusammenfassung und nächste Schritte",
    description: "Zusammenfassung der gewonnen Erkenntnisse und unsere Vorschläge für Ihre nächsten Schritte.",
    duration: "5 min"
  }
];

export const handbuchEntries: GlossaryEntry[] = [
  {
    id: 'amortisation',
    title: "Was ist die Amortisation?",
    description: "Amortisation oder Tilgung ist der Prozess der schrittweisen Tilgung eines Darlehens durch regelmäßige Zahlungen über einen festgelegten Zeitraum.",
    category: 'Finanzierung',
    duration: "3 min",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  },
  {
    id: 'grundsteuer',
    title: "Was ist die Grundsteuer?",
    description: "Die Grundsteuer ist eine jährliche Steuer, die von den Gemeinden erhoben wird und auf den Besitz von Grundstücken und Gebäuden anfällt.",
    category: 'Steuern',
    duration: "34 sec",
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
  },
  {
    id: 'bausachverstaendiger',
    title: "Was ist ein Bausachverständiger?",
    description: "Ein qualifizierter Fachmann für Immobilienbesichtigung, der den Zustand und Wert von Immobilien professionell bewertet.",
    category: 'Kaufprozess',
    duration: "3 min",
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
  },
  {
    id: 'immobilientransaktion',
    title: "Was ist eine Immobilientransaktion?",
    description: "Ein komplexer rechtlicher und wirtschaftlicher Prozess des Kaufs oder Verkaufs von Immobilien mit mehreren beteiligten Parteien.",
    category: 'Kaufprozess',
    duration: "4 min",
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
  },
  {
    id: 'immobilienbewertung',
    title: "Was ist eine Immobilienbewertung?",
    description: "Der Prozess der Bestimmung des Marktwerts einer Immobilie durch Analyse verschiedener Faktoren wie Lage, Zustand und Vergleichsobjekte.",
    category: 'Bewertung',
    duration: "4 min",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
  },
  {
    id: 'baufinanzierung',
    title: "Was ist eine Baufinanzierung?",
    description: "Eine spezielle Art der Kreditvergabe für Bau, Kauf oder Sanierung von Immobilien mit langfristigen Laufzeiten und günstigen Konditionen.",
    category: 'Finanzierung',
    duration: "3 min",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 'monatliche-rate',
    title: "Was ist die monatliche Rate?",
    description: "Ein fester Geldbetrag, den der Kreditnehmer monatlich zahlen muss und der sich aus Zinsen und Tilgung zusammensetzt.",
    category: 'Finanzierung',
    duration: "2 min",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
  },
  {
    id: 'maklerverordnung',
    title: "Was ist die Makler- und Bauträgerverordnung?",
    description: "Ein Gesetz zur Regelung der schrittweisen Zahlung beim Neubaukauf und zum Schutz der Käufer vor finanziellen Risiken.",
    category: 'Recht',
    duration: "2 min",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
  }
];

export const categories = [
  'Alle Kategorien',
  'Finanzierung',
  'Steuern',
  'Kaufprozess',
  'Bewertung',
  'Recht'
] as const;
