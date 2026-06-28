import { AgentState } from "../state";
import { llm } from "../../llm";
import { INVESTMENT_PROMPT } from "../../prompts";

export async function analyzeNode(
    state: typeof AgentState.State
) {
    const prompt = `
${INVESTMENT_PROMPT}

Stock Quote:
${JSON.stringify(state.quote, null, 2)}

Latest News:
${JSON.stringify(state.news, null, 2)}
`;

    const response = await llm.invoke(prompt);

    const content =
        typeof response.content === "string"
            ? response.content
            : JSON.stringify(response.content);

    // Remove markdown fences
    const cleaned = content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return {
        analysis: JSON.parse(cleaned),
    };
}