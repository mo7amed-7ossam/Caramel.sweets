import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[] = []
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Convert history format if needed, though for single turns usually simple prompt is enough.
    // However, to maintain context properly with the new SDK:
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "عذراً، لم أستطع فهم ذلك. هل يمكنك المحاولة مرة أخرى؟";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "واجهنا مشكلة تقنية صغيرة 🍪. يرجى المحاولة لاحقاً.";
  }
};