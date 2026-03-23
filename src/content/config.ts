import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    category: z.string(),
    image: z.string().optional(), // 新增图片字段
  }),
});

export const collections = { essays };
