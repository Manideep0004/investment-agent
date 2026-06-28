import { StateGraph, START, END } from "@langchain/langgraph";

import { AgentState } from "./state";

import { searchNode } from "./nodes/search";
import { quoteNode } from "./nodes/quote";
import { newsNode } from "./nodes/news";
import { analyzeNode } from "./nodes/analyze";

export const investmentGraph = new StateGraph(AgentState)

  .addNode("search", searchNode)
  .addNode("fetchQuote", quoteNode)
  .addNode("fetchNews", newsNode)
  .addNode("analyze", analyzeNode)

  .addEdge(START, "search")
  .addEdge("search", "fetchQuote")
  .addEdge("fetchQuote", "fetchNews")
  .addEdge("fetchNews", "analyze")
  .addEdge("analyze", END)

  .compile();