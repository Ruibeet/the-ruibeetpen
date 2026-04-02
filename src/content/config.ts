import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    category: z.string(),
    image: image(),
  }),
});

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
