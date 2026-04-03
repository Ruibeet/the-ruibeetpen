import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    category: z.string(),
    image: image().optional(), 
  }),
});

// ✨ 新增：定义 novel 集合
const novel = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(), // 顺便也把简介设为可选
    category: z.string().optional(),    // 类别设为可选
    image: image().optional(),
    date: z.union([z.string(), z.number(), z.date()]).optional(), // ✨ 改为可选
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
    image: image().optional(),
  }),
});

const life = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: image().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { 
  'essays': essays,
  'novel': novel, // ✨ 必须在这里注册
  'field': field,
  'life': life 
};
