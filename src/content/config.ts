import { defineCollection, z } from 'astro:content';

const home = defineCollection({
	type: 'data',
	schema: z.object({
		locale: z.string(),
		test: z.string(),
	}),
});

export const collections = {
	home: home,
};
