'use server';
/**
 * @fileOverview A Genkit flow for categorizing blog content and suggesting tags.
 *
 * - blogContentCategorization - A function that handles the blog content categorization process.
 * - BlogContentCategorizationInput - The input type for the blogContentCategorization function.
 * - BlogContentCategorizationOutput - The return type for the blogContentCategorization function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const BlogContentCategorizationInputSchema = z.object({
  content: z.string().describe('The full content of the blog post.'),
});
export type BlogContentCategorizationInput = z.infer<typeof BlogContentCategorizationInputSchema>;

const BlogContentCategorizationOutputSchema = z.object({
  category: z.string().describe('The main category of the blog post. Examples: Islamic Finance, Investment Strategies, Wealth Management, Ethical Investing, Personal Finance, Digital Transformation, Technology, ESG, Sustainable Finance.'),
  tags: z.array(z.string()).describe('A list of relevant tags for the blog post, each a single word or short phrase. Examples: Zakat, Halal, Sukuk, Fintech, Sharia, Financial Planning, Retirement, Portfolio, Innovation, AI, Blockchain, Climate Change.'),
});
export type BlogContentCategorizationOutput = z.infer<typeof BlogContentCategorizationOutputSchema>;

export async function blogContentCategorization(input: BlogContentCategorizationInput): Promise<BlogContentCategorizationOutput> {
  return blogContentCategorizationFlow(input);
}

const blogContentCategorizationPrompt = ai.definePrompt({
  name: 'blogContentCategorizationPrompt',
  input: { schema: BlogContentCategorizationInputSchema },
  output: { schema: BlogContentCategorizationOutputSchema },
  prompt: `You are an intelligent blog content analyzer for Rayaan Sukuk Takaful Services.
Your task is to analyze the provided blog post content and identify its main category and relevant tags.
The categories should be concise and reflect the primary topic.
The tags should be short, descriptive keywords or phrases that help organize and make the content discoverable.

Blog Post Content:
{{{content}}}`,
});

const blogContentCategorizationFlow = ai.defineFlow(
  {
    name: 'blogContentCategorizationFlow',
    inputSchema: BlogContentCategorizationInputSchema,
    outputSchema: BlogContentCategorizationOutputSchema,
  },
  async (input) => {
    const { output } = await blogContentCategorizationPrompt(input);
    return output!;
  }
);
