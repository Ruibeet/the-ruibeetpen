import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    category: z.string(),
    // 关键改动：不再强制要求 image() 函数检查，改为字符串
    image: z.any().optional(), 
  }),
});

const field = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string().optional(),
    category: z.string(), 
    title: z.string(),
    date: z.coerce.date(),    
    location: z.string(),
    summary: z.string().optional(),
    image: z.any().optional(),
  }),
});

const life = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.any().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { 
  'essays': essays,
  'field': field,
  'life': life 
};
