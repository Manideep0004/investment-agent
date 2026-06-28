import { Annotation } from "@langchain/langgraph";

export const AgentState = Annotation.Root({
  company: Annotation<string>(),
  symbol: Annotation<string>(),
  quote: Annotation<any>(),
  news: Annotation<any[]>(),
  analysis: Annotation<string>(),
});