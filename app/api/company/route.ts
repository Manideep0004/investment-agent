import { NextRequest, NextResponse } from "next/server";
import { yahooService } from "@/lib/yahoo";

export async function GET(req: NextRequest) {
  const company = req.nextUrl.searchParams.get("company");

  if (!company) {
    return NextResponse.json(
      { error: "Missing company parameter" },
      { status: 400 }
    );
  }

  const search = await yahooService.searchCompany(company);
  const quote = await yahooService.getQuote(search.symbol);
  const news = await yahooService.getNews(company);

  return NextResponse.json({
    search,
    quote,
    news,
  });
}