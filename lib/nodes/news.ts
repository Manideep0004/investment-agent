import { AgentState } from "../state";
import { yahooService } from "../yahoo";

export async function newsNode(
  state: typeof AgentState.State
) {
  const news = await yahooService.getNews(state.company);

  return {
    news,
  };
}