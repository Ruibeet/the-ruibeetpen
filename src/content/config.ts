import { defineCollection, z } from 'astro:content';

const field = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    category: z.enum(['100-people', 'roots', 'mountains']), // 限制只能是这三个值
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    summary: z.string(),
  }),
});

export const collections = { 'field': field };
