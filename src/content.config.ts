import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CATEGORY_KEYS } from "./categories";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(CATEGORY_KEYS),
    tag: z.string().optional(),
    draft: z.boolean().default(false),
    centerHero: z.boolean().default(false),
  }),
});

export const collections = { posts };
