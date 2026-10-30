import { getCollection } from 'astro:content';

/** Published projects, newest first. Drafts are hidden in production builds. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublications() {
  const all = await getCollection('publications');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatMonth = (d: Date) =>
  d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });

/** "/about.html" → "/about", "/index.html" → "/" (build.format is 'file'). */
export const cleanPath = (pathname: string) => pathname.replace(/(\/index)?\.html$/, '').replace(/\/$/, '') || '/';
