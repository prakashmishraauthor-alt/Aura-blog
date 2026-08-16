import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    readTime: z.string(),
    excerpt: z.string(),
    thumb: z.string(),
    authorName: z.string(),
    authorAvatar: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
