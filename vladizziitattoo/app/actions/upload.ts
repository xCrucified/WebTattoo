'use server';
import { prisma } from '@/lib/prisma';
import { put } from '@vercel/blob';

import { revalidatePath } from 'next/cache';

export async function uploadGalleryImage(formData: FormData) {
  const file = formData.get('image') as File;
  if (!file || file.size === 0) {
    throw new Error('Файл не выбран');
  }

  const blob = await put(file.name, file, { 
    access: 'public',
    addRandomSuffix: true 
  });

  await prisma.galleryImage.create({
    data: {
      imageUrl: blob.url,
      galleryId: 7, 
    },
  });

  revalidatePath('/');
  revalidatePath('/admin');
}