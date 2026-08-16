import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Make them optional:
    readTime: z.string().optional(), // or z.number().optional()
    authorAvatar: z.string().optional(),
    
    // OR set a default value:
    // authorAvatar: z.string().default('/default-avatar.png'),
  }),
});

export const collections = { posts };
