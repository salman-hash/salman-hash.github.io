import type { ImageMetadata } from 'astro';

// Optional profile photo: src/assets/profile.(jpg|jpeg|png|webp), any letter case.
const photos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/profile.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

export const profilePhoto: ImageMetadata | undefined = Object.values(photos)[0]?.default;
