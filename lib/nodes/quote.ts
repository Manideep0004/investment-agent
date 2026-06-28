import { AgentState } from "../state";
import { yahooService } from "../yahoo";

export async function quoteNode(
  state: typeof AgentState.State
) {
  const quote = await yahooService.getQuote(state.symbol);

  return {
    quote,
  };
}