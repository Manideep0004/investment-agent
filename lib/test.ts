import { Annotation, END, START, StateGraph } from "@langchain/langgraph";
import { yahooService } from "./yahoo";
import { llm } from "./llm";
import { buildInvestmentContext } from "./context";
import { INVESTMENT_PROMPT } from "./prompts";


const State = Annotation.Root({
    company: Annotation<string>(),
    symbol: Annotation<string>(),
    quote: Annotation<any>(),
    news: Annotation<any[]>(),
    analysis: Annotation<any>(),
});

const graph = new StateGraph(State)

    .addNode("search", async (state) => {
        console.log("🔍 Searching...");

        const company = await yahooService.searchCompany(state.company);

        return {
            symbol: company.symbol,
        };
    })

    .addNode("fetchQuote", async (state) => {
        console.log("📈 Fetching Quote...");

        const quote = await yahooService.getQuote(state.symbol);

        return {
            quote,
        };
    })

    .addNode("fetchNews", async (state) => {
        console.log("📰 Fetching News...");

        const news = await yahooService.getNews(state.company);

        return {
            news,
        };
    })

    .addNode("analyze", async (state) => {
        console.log("🤖 Gemini Analysis...");

        const context = buildInvestmentContext(state);

        const prompt = `
${INVESTMENT_PROMPT}

Investment Data

${context}
`;

        const response = await llm.invoke(prompt);

        const text =
            typeof response.content === "string"
                ? response.content
                : JSON.stringify(response.content);

        const cleaned = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return {
            analysis: JSON.parse(cleaned),
        };
    })

    .addEdge(START, "search")
    .addEdge("search", "fetchQuote")
    .addEdge("fetchQuote", "fetchNews")
    .addEdge("fetchNews", "analyze")
    .addEdge("analyze", END)

    .compile();

async function main() {
    const result = await graph.invoke({
        company: "Apple",
    });

    console.dir(result, { depth: null });
}

main();