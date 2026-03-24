import { defineCollection, z } from 'astro:content';

// 1. 定义“田野”集合的规则
const field = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    category: z.string(), 
    title: z.string(),
    date: z.any(),    
    location: z.string(),
    summary: z.string(),
    image: z.string().optional(), // 允许田野文章带封面图
  }),
});

// 2. 定义“生活”集合的规则（新增）
const life = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.any(),
    image: z.string().optional(), // 瀑布流非常依赖图片，设为可选
    location: z.string().optional(),
  }),
});

// 3. 统一导出：这步最关键，必须包含 field 和 life
export const collections = { 
  'field': field,
  'life': life 
};
