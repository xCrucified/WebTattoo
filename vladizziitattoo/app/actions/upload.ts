'use server'

import { prisma } from '@/lib/prisma'; 
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function uploadGalleryImage(formData: FormData) {
  try {
    const file = formData.get('image') as File;
    const galleryId = Number(formData.get('galleryId'));

    if (!file) {
      return { success: false, error: 'Image not found' };
    }

    const blob = await put(file.name, file, { access: 'public' });

    await prisma.galleryImage.create({
      data: {
        imageUrl: blob.url,
        galleryId: galleryId || 1,
      },
    });

    revalidatePath('/gallery'); 
    
    return { success: true };

  } catch (error) {
    console.error("Failed to upload image:", error);
    return { success: false, error: 'Failed to upload image' };
  }
}