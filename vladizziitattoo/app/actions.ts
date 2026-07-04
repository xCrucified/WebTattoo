'use server'

import { prisma } from '@/lib/prisma'; 
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function uploadGalleryImage(formData: FormData) {
  const file = formData.get('image') as File;
  const galleryId = Number(formData.get('galleryId'));

  if (!file) {
    throw new Error('Файл не найден');
  }

  const blob = await put(file.name, file, { access: 'public' });

  await prisma.galleryImage.create({
    data: {
      imageUrl: blob.url,
      galleryId: galleryId,
    },
  });

  revalidatePath('/gallery'); 
}