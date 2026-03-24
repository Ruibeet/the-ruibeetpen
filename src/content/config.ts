import { defineCollection, z } from 'astro:content';

// 1. 定义“杂文 (Essays/Blogs)”集合 - ✨ 核心修改点
const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.any(),
    description: z.string(),
    category: z.string(),
    // 使用 image() 助手，这样 Astro 才能处理本地路径
    image: image().optional(), 
  }),
});

// 2. 定义“田野”集合
const field = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string(),
    category: z.string(), 
    title: z.string(),
    date: z.any(),    
    location: z.string(),
    summary: z.string(),
    image: image().optional(), // 同样改为 image()
  }),
});

// 3. 定义“生活”集合
const life = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.any(),
    image: image().optional(), // 同样改为 image()
    location: z.string().optional(),
  }),
});

// 4. 统一导出：务必包含 'essays'
export const collections = { 
  'essays': essays,
  'field': field,
  'life': life 
};
