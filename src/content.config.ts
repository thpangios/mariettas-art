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

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    eyebrow: z.string(),
    heading: z.string(),
    lede: z.string().optional(),
    // About-specific
    exhibitions: z
      .array(
        z.object({
          year: z.union([z.number(), z.string()]),
          title: z.string(),
          venue: z.string(),
        }),
      )
      .optional(),
    contactHeading: z.string().optional(),
    contactBlurb: z.string().optional(),
    // Contact-specific
    directLabel: z.string().optional(),
    submitLabel: z.string().optional(),
    thanksMessage: z.string().optional(),
  }),
});

export const collections = { paintings, pages };
