import { defineCollection, z } from 'astro:content';
const field = defineCollection({
  schema: z.object({
    id: z.string(),
    category: z.string(), 
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    summary: z.string(),
  }),
});
export const collections = { 'field': field };
