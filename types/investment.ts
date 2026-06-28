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
  quote: {
    regularMarketPrice: number;
    marketCap: number;
    trailingPE: number;
    averageAnalystRating: string;
  };
  news: {
    title: string;
    publisher: string;
    link: string;
  }[];
  analysis: Analysis;
}