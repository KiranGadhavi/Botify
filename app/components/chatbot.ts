import { GoogleGenerativeAI } from "@google/generative-ai"

const api_key='AIzaSyCRAgC2pLZ9EZPZSx4cyCyuV3Atbsh5QrA'

// Make sure to include these imports:
const genAI = new GoogleGenerativeAI(api_key);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "What colour is the sky?";

// (async () => {
//   const result = await model.generateContent(prompt);
//   console.log(result.response.text());
// })();