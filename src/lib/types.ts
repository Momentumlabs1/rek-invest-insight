export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  sqm: number;
  rooms: number;
  rent: number;
  fertigstellung: string;
  bautraeger: string;
  stockwerk: string;
  foerderungen: string[];
  images: string[];
  mietrendite: number;
  nettogewinn: number;
  eigenkapitalrendite: number;
  liquiditaet: number;
}

export interface CalculationInput {
  kaufpreis: number;
  wohnflaeche: number;
  nettokaltmiete: number;
  jahreseinkommen: number;
  eigenkapital: number;
  maklerprovision: number;
  grunderwerbsteuer: number;
  gebaeudestandard: 'eh40' | 'eh40plus' | 'eh55' | 'standard';
  sonderAfA: boolean;
}

export interface CalculationResult {
  kaufpreis: number;
  nebenkosten: number;
  gesamtinvestition: number;
  eigenkapitalBedarf: number;
  kreditbetrag: number;
  monatlicheRate: number;
  lineareAfA: number;
  sonderAfA: number;
  jahresSteuerersparnis: number;
  mieteinnahmen: number;
  nettoLiquiditaet: number;
  nettoLiquiditaetNachSteuern: number;
  mietrendite: number;
  eigenkapitalrendite: number;
  roi: number;
  nettogewinn10Jahre: number;
  gesamtSteuerersparnis10Jahre: number;
  wertsteigerung10Jahre: number;
}
