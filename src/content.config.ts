import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Tags look like ROS topics: `/perception`, `/embedded`, `/cmd_vel`. */
const topic = z.string().regex(/^\/[a-z0-9_]+(\/[a-z0-9_]+)*$/, 'Tags must look like ROS topics, e.g. "/perception"');

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(200),
      role: z.string(),
      /** Where it happened, e.g. "Cowlar" or "NUST Automotive Group". */
      org: z.string().optional(),
      /** Used for sorting (newest first). */
      date: z.coerce.date(),
      tags: z.array(topic).min(1),
      stack: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string().min(1),
      links: z
        .object({
          repo: z.url().optional(),
          demo: z.url().optional(),
          paper: z.url().optional(),
          video: z.url().optional(),
        })
        .default({}),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    venue: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['conference', 'journal', 'patent']),
    status: z.enum(['published', 'accepted', 'in-progress', 'filed', 'granted']),
    doi: z.string().optional(),
    url: z.url().optional(),
    /** Related project slug (file name without .md). */
    project: reference('projects').optional(),
  }),
});

export const collections = { projects, publications };
