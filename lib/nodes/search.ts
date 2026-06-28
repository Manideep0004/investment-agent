import { AgentState } from "../state";
import { yahooService } from "../yahoo";

export async function searchNode(
  state: typeof AgentState.State
) {
  const company = await yahooService.searchCompany(state.company);

  return {
    symbol: company.symbol,
  };
}