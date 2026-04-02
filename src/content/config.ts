import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    category: z.string(),
    image: image(), // 必须是这个，不能是 z.string()
  }),
});

// ... 其他集合 (field, life) 保持不变

export const collections = { 
  'essays': essays,
  'field': field,
  'life': life 
};
