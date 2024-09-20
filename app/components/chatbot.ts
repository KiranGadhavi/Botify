import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

if (!api_key) {
  throw new Error(
    "NEXT_PUBLIC_GOOGLE_API_KEY is not set in environment variables"
  );
}

const genAI = new GoogleGenerativeAI(api_key);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
