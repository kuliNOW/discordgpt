import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config({ 
    path: ".env" 
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const Respon = async (pesan) => {
  return await openai.chat.completions.create({
    model: process.env.MODEL,
    messages: [{ 
        role: process.env.ROLE, 
        content: pesan 
    }],
  });
};