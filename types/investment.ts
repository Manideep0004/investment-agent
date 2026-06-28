export interface Analysis {
  recommendation: string;
  confidence: number;
  summary: string;
  pros: string[];
  cons: string[];
}

export interface InvestmentResult {
  company: string;
  symbol: string;
  quote: any;
  news: any[];
  analysis: Analysis;
}   