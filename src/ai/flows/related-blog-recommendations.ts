'use server';
/**
 * @fileOverview A Genkit flow for categorizing blog content and generating related article recommendations.
 *
 * - recommendRelatedBlogs - A function that handles the blog categorization and recommendation process.
 * - RelatedBlogRecommendationsInput - The input type for the recommendRelatedBlogs function.
 * - RelatedBlogRecommendationsOutput - The return type for the recommendRelatedBlogs function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RelatedBlogRecommendationsInputSchema = z.object({
  blogTitle: z.string().describe('The title of the blog post.'),
  blogContent: z.string().describe('The full content of the blog post.'),
});
export type RelatedBlogRecommendationsInput = z.infer<typeof RelatedBlogRecommendationsInputSchema>;

const RelatedBlogRecommendationsOutputSchema = z.object({
  categories: z.array(z.string()).describe('A list of relevant categories or tags for the blog post.'),
  recommendedArticles: z.array(
    z.object({
      title: z.string().describe('The title of the recommended article.'),
      summary: z.string().describe('A brief summary (2-3 sentences) of the recommended article.'),
    })
  ).describe('A list of 3-5 hypothetical blog article recommendations related to the current post.'),
});
export type RelatedBlogRecommendationsOutput = z.infer<typeof RelatedBlogRecommendationsOutputSchema>;

export async function recommendRelatedBlogs(input: RelatedBlogRecommendationsInput): Promise<RelatedBlogRecommendationsOutput> {
  return relatedBlogRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'relatedBlogRecommendationsPrompt',
  input: { schema: RelatedBlogRecommendationsInputSchema },
  output: { schema: RelatedBlogRecommendationsOutputSchema },
  prompt: `You are an expert content categorizer and recommender for a financial advisory blog.
Your task is to analyze the provided blog post, identify its main categories or tags, and then generate 3 to 5 highly relevant, hypothetical blog article recommendations.
For each recommendation, provide a title and a brief summary (2-3 sentences) that clearly indicates its relation to the current post and would entice a reader to click.
The recommendations should be based on the content and topic of the given blog post.

Output your response as a JSON object matching the provided schema, which includes an array of 'categories' and an array of 'recommendedArticles'.

Blog Title: {{{blogTitle}}}
Blog Content:
{{{blogContent}}}`
});

const relatedBlogRecommendationsFlow = ai.defineFlow(
  {
    name: 'relatedBlogRecommendationsFlow',
    inputSchema: RelatedBlogRecommendationsInputSchema,
    outputSchema: RelatedBlogRecommendationsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
