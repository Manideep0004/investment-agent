import { yahooService } from "@/lib/yahoo";
import { AgentState } from "../state";

export async function searchNode(
  state: typeof AgentState.State
) {
  console.log("🔍 Searching...");

  const company = await yahooService.searchCompany(state.company);

  return {
    symbol: company.symbol,
  };
}