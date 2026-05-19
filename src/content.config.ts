import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import siteData from "./content/site.json";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tools: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    secondary: z.boolean().default(false),
    order: z.number().default(99),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          primary: z.boolean().default(false),
        })
      )
      .default([]),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    company: z.string(),
    period: z.string(),
    industry: z.string(),
    summary: z.string(),
    order: z.number().default(99),
    stack: z.array(z.string()),
    outcomes: z.array(z.string()),
  }),
});

export const collections = { projects, experience };

export type SiteData = typeof siteData;
export { siteData };
