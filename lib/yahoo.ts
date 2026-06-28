import YahooFinance from "yahoo-finance2";

const yahoo = new YahooFinance({
  suppressNotices: ["yahooSurvey"],
});

export class YahooService {
  async searchCompany(query: string) {
    const result = await yahoo.search(query);

    const company = result.quotes.find(
      (q): q is typeof q & { symbol: string } =>
        "symbol" in q && q.isYahooFinance
    );

    if (!company) {
      throw new Error("Company not found");
    }

    return company;
  }

  async getQuote(symbol: string) {
    return yahoo.quote(symbol);
  }

  async getNews(query: string) {
    const result = await yahoo.search(query);
    return result.news;
  }
}

export const yahooService = new YahooService();