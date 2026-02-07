import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string().default('Le Monde de Camilou'),
        image: image().optional(),
        tags: z.array(z.string()),
        category: z.string(),
    }),
});

export const collections = {
    'blog': blogCollection,
};
