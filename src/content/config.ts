import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    category: z.string(),
    // ✨ 修复：使用 image() 来告诉 Astro 这是一个本地图片文件
    image: image().optional(), 
  }),
});

// 其他 collection 保持不变，但建议也把 image 字段改成 image().optional()
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
  'field': field,
  'life': life 
};
