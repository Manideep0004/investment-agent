import { StateGraph, START, END } from "@langchain/langgraph";

import { AgentState } from "./state";

import { searchNode } from "./nodes/search";
import { quoteNode } from "./nodes/quote";
import { newsNode } from "./nodes/news";
import { analyzeNode } from "./nodes/analyze";

const builder = new StateGraph(AgentState);

builder.addNode("search", searchNode);
builder.addNode("fetchQuote", quoteNode);
builder.addNode("fetchNews", newsNode);
builder.addNode("analyzeInvestment", analyzeNode);

builder.addEdge(START, "search");

builder.addEdge("search", "fetchQuote");
builder.addEdge("fetchQuote", "fetchNews");
builder.addEdge("fetchNews", "analyzeInvestment");

builder.addEdge("analyzeInvestment", END);

export const investmentGraph = builder.compile();