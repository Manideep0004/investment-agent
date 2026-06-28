import { yahooService } from "@/lib/yahoo";
import { AgentState } from "../state";

export async function newsNode(
  state: typeof AgentState.State
) {
  console.log("📰 Fetching News...");

  return {
    news: await yahooService.getNews(state.company),
  };
}