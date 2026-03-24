import { defineCollection, z } from 'astro:content';

// 1. 定义“杂文 (Essays)”集合
const essays = defineCollection({
  type: 'content',
  // ✨ 必须传入 { image } 参数
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.any(),
    description: z.string(),
    category: z.string(),
    // ✨ 使用 image() 助手，Astro 会自动处理 ./f1-images/max.jpg 这种路径
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
    image: image().optional(), // 这里也统一改为 image()
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

// 4. 统一导出
export const collections = { 
  'essays': essays,
  'field': field,
  'life': life 
};
