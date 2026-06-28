function formatMarketCap(value: number) {
  if (value >= 1_000_000_000_000) {
    return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
  }

  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  }

  return `$${value}`;
}

export function buildInvestmentContext(state: {
  quote: any;
  news: any[];
}) {
  const quote = state.quote;

  const headlines = state.news
    .slice(0, 5)
    .map((article) => `- ${article.title}`)
    .join("\n");

  return `
Company: ${quote.longName}
Symbol: ${quote.symbol}

Current Price: $${quote.regularMarketPrice}
Market Cap: ${formatMarketCap(quote.marketCap)}
P/E Ratio: ${quote.trailingPE}
Forward P/E: ${quote.forwardPE}
EPS: ${quote.epsTrailingTwelveMonths}
Dividend Yield: ${quote.dividendYield}%
52 Week Range: ${quote.fiftyTwoWeekLow} - ${quote.fiftyTwoWeekHigh}
Analyst Rating: ${quote.averageAnalystRating}

Latest News:
${headlines}
`;
}