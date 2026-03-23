import { defineCollection, z } from 'astro:content';

// 定义“田野”集合的结构
const field = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    date: z.coerce.date(), // 强制转换为日期格式
    location: z.string(),
    title: z.string(),
    enTitle: z.string(),
    summary: z.string(),
    hasImage: z.boolean(),
    image: z.string().optional(),
  }),
});

// 定义“生活”集合的结构
const life = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// 导出所有集合
export const collections = {
  'field': field,
  'life': life,
};
