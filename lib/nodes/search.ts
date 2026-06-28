import { AgentState } from "../state";
import { yahooService } from "../yahoo";

export async function searchNode(state: typeof AgentState.State) {
  console.log("🔍 Search Node Started");

  const company = await yahooService.searchCompany(state.company);

  console.log("Company Found:", company);

  return {
    symbol: company.symbol,
  };
}