
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const summarizeEmail = async (subject: string, body: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Please provide a concise, 2-sentence summary of this email.\nSubject: ${subject}\nBody: ${body}`,
    config: {
      temperature: 0.7,
    }
  });
  return response.text;
};

export const draftReply = async (originalEmail: string, userIntent: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Write a professional email reply based on this original message: "${originalEmail}". The reply should address this: "${userIntent}". Keep it concise and polite.`,
    config: {
      temperature: 0.8,
    }
  });
  return response.text;
};

export const checkPhishing = async (emailContent: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this email for phishing attempts or security risks. Return a JSON object with "isSuspicious" (boolean) and "reason" (string).\n\nContent: ${emailContent}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          isSuspicious: { type: Type.BOOLEAN },
          reason: { type: Type.STRING }
        },
        required: ["isSuspicious", "reason"]
      }
    }
  });
  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    return { isSuspicious: false, reason: "Error parsing analysis" };
  }
};
