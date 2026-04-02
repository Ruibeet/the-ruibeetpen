import { defineCollection, z } from 'astro:content';

// 1. 定义“杂文 (Essays)”集合
const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(), // 删除了多余的 z.any()，只保留这一个
    description: z.string(),
    category: z.string(),
    image: image(), // 删除了重复的这一行
  }),
});

// 2. 定义“田野 (Field)”集合
const field = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string(),
    category: z.string(), 
    title: z.string(),
    date: z.coerce.date(),    
    location: z.string(),
    summary: z.string(),
    image: image().optional(),
  }),
});

// 3. 定义“生活 (Life)”集合
const life = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: image().optional(),
    location: z.string().optional(),
  }),
});

// 4. 统一导出（这里一定要写完整）
export const collections = { 
  'essays': essays,
  'field': field,
  'life': life 
};
