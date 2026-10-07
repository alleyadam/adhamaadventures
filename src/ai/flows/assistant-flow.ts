'use server';
/**
 * @fileOverview A Genkit flow for the Adhama AI Safari Assistant.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.array(z.object({ text: z.string() }))
});

const AssistantInputSchema = z.object({
  message: z.string(),
  history: z.array(MessageSchema).optional(),
});

export async function askAssistant(input: z.infer<typeof AssistantInputSchema>): Promise<string> {
  const response = await ai.generate({
    system: "You are Adhama, the expert AI safari assistant for Adhama Africa Adventures. Your goal is to help users plan their dream Tanzania safari. Be helpful, warm, professional, and showcase deep local knowledge of Serengeti, Ngorongoro, Kilimanjaro, and Zanzibar. Keep responses concise but evocative. If asked about booking, suggest using the 'Plan Your Safari' button or contacting the team on WhatsApp.",
    prompt: input.message,
    messages: input.history,
  });
  return response.text;
}
