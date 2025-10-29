import { CalculationInput, CalculationResult } from './types';

export function calculateTaxRate(jahreseinkommen: number): number {
  const grundfreibetrag = 11604;
  
  if (jahreseinkommen <= grundfreibetrag) return 0;
  
  const taxableIncome = jahreseinkommen - grundfreibetrag;
  
  if (taxableIncome <= 11000) return 0.14;
  if (taxableIncome <= 31000) return 0.24;
  if (taxableIncome <= 62000) return 0.30;
  if (taxableIncome <= 100000) return 0.42;
  return 0.45;
}

export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  years: number
): number {
  const monthlyRate = annualRate / 12;
  const numPayments = years * 12;
  
  if (monthlyRate === 0) return principal / numPayments;
  
  return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
         (Math.pow(1 + monthlyRate, numPayments) - 1);
}

export function calculatePropertyValue(
  initialPrice: number,
  years: number,
  appreciationRate: number = 0.025
): number {
  return initialPrice * Math.pow(1 + appreciationRate, years);
}

export function calculateAfA(
  kaufpreis: number,
  gebaeudestandard: string,
  sonderAfA: boolean
) {
  const lineareAfA = kaufpreis * 0.03;
  const sonderAfAAmount = sonderAfA && gebaeudestandard === 'eh40' 
    ? kaufpreis * 0.05 
    : 0;
  const degressiveAfA = sonderAfA ? kaufpreis * 0.05 : kaufpreis * 0.03;
  
  return { lineareAfA, sonderAfA: sonderAfAAmount, degressiveAfA };
}

export function calculateInvestment(input: CalculationInput): CalculationResult {
  const {
    kaufpreis,
    nettokaltmiete,
    jahreseinkommen,
    eigenkapital,
    maklerprovision,
    grunderwerbsteuer,
    gebaeudestandard,
    sonderAfA,
  } = input;

  const maklerGebuehr = kaufpreis * (maklerprovision / 100);
  const grunderwerbsteuerBetrag = kaufpreis * (grunderwerbsteuer / 100);
  const notarkosten = kaufpreis * 0.015;
  const grundbucheintrag = kaufpreis * 0.005;
  
  const nebenkosten = maklerGebuehr + grunderwerbsteuerBetrag + notarkosten + grundbucheintrag;
  const gesamtinvestition = kaufpreis + nebenkosten;
  
  const eigenkapitalBedarf = gesamtinvestition * 0.10;
  const kreditbetrag = gesamtinvestition - eigenkapital;
  
  const kfwBetrag = Math.min(150000, kreditbetrag);
  const regularKredit = kreditbetrag - kfwBetrag;
  
  const kfwRate = 0.0001;
  const regularRate = 0.04;
  
  const kfwMonthly = calculateMonthlyPayment(kfwBetrag, kfwRate, 30);
  const regularMonthly = calculateMonthlyPayment(regularKredit, regularRate, 30);
  const monatlicheRate = kfwMonthly + regularMonthly;
  
  const afa = calculateAfA(kaufpreis, gebaeudestandard, sonderAfA);
  const totalAfA = afa.lineareAfA + afa.sonderAfA;
  const taxRate = calculateTaxRate(jahreseinkommen);
  const jahresSteuerersparnis = totalAfA * taxRate;
  
  const mieteinnahmen = nettokaltmiete;
  const hausgeld = 50;
  const nettoLiquiditaet = mieteinnahmen - monatlicheRate - hausgeld;
  const nettoLiquiditaetNachSteuern = nettoLiquiditaet + (jahresSteuerersparnis / 12);
  
  const mietrendite = ((nettokaltmiete * 12) / kaufpreis) * 100;
  const jahresCashflow = (nettoLiquiditaet * 12) + jahresSteuerersparnis;
  const eigenkapitalrendite = (jahresCashflow / eigenkapital) * 100;
  
  const wertsteigerung10Jahre = calculatePropertyValue(kaufpreis, 10) - kaufpreis;
  const gesamtSteuerersparnis10Jahre = jahresSteuerersparnis * 10;
  const nettogewinn10Jahre = wertsteigerung10Jahre + gesamtSteuerersparnis10Jahre + (jahresCashflow * 10);
  
  const roi = ((nettogewinn10Jahre - eigenkapital) / eigenkapital) * 100;
  
  return {
    kaufpreis,
    nebenkosten,
    gesamtinvestition,
    eigenkapitalBedarf,
    kreditbetrag,
    monatlicheRate,
    lineareAfA: afa.lineareAfA,
    sonderAfA: afa.sonderAfA,
    jahresSteuerersparnis,
    mieteinnahmen,
    nettoLiquiditaet,
    nettoLiquiditaetNachSteuern,
    mietrendite,
    eigenkapitalrendite,
    roi,
    nettogewinn10Jahre,
    gesamtSteuerersparnis10Jahre,
    wertsteigerung10Jahre,
  };
}
