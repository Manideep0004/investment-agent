import { llm } from "./llm";

async function main() {
  const response = await llm.invoke("Say hello in one sentence.");
  console.log(response.content);
}

main().catch(console.error);