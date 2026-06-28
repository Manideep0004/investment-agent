import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GOOGLE_API_KEY!,
  temperature: 0.2,
});