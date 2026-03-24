import { defineCollection, z } from 'astro:content';

// 1. 定义“杂文 (Essays)”集合 - 重点修复对象
const essays = defineCollection({
  type: 'content',
  // ✨ 使用 ({ image }) 函数式 Schema，这是处理本地图片的关键
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.any(),
    description: z.string(),
    category: z.string(),
    // ✨ 这里的 image() 会把你的 "./f1-images/max.jpg" 转换成 Astro 优化的资源
    image: image(), 
  }),
});

// 2. 定义“田野 (Field)”集合
const field = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string(),
    category: z.string(), 
    title: z.string(),
    date: z.any(),    
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
    date: z.any(),
    image: image().optional(),
    location: z.string().optional(),
  }),
});

// 4. 统一导出：确保包含 essays, field, life
export const collections = { 
  'essays': essays,
  'field': field,
  'life': life 
};
