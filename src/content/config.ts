import { defineCollection, z } from 'astro:content';

const field = defineCollection({
  type: 'content', // 明确告诉它是内容类型
  schema: z.object({
    id: z.string(),
    category: z.string(), 
    title: z.string(),
    date: z.any(),    // 修改这里：允许任何格式，哪怕是字符串，不再强制转换
    location: z.string(),
    summary: z.string(),
  }),
});

export const collections = { 'field': field };
