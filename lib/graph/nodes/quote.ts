import { yahooService } from "@/lib/yahoo";
import { AgentState } from "../state";

export async function quoteNode(
  state: typeof AgentState.State
) {
  console.log("📈 Fetching Quote...");

  return {
    quote: await yahooService.getQuote(state.symbol),
  };
}
