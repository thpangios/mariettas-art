import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const paintings = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/paintings" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number().int().optional(),
      category: z.enum(["canvas", "paper"]).default("canvas"),
      medium: z.string().default("Acrylic on canvas"),
      dimensions: z.string().optional(),
      status: z.enum(["available", "sold", "reserved"]).default("available"),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      cover: image(),
      alt: z.string(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { paintings };
