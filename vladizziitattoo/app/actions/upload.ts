'use server';
import { prisma } from '@/lib/prisma';
import { put, del } from '@vercel/blob';

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
export async function deleteGalleryImage(id: number, imageUrl: string) {
  try {
    await del(imageUrl);
    await prisma.galleryImage.delete({
      where: { id },
    });

    revalidatePath('/admin');
    revalidatePath('/');
    
  } catch (error) {
    console.error("Error while deleting image:", error);
    throw new Error("Cannot delete image. Please try again later.");
  }
}

export async function updateGalleryImage(id: number, oldImageUrl: string, formData: FormData) {
  const file = formData.get('image') as File;
  
  if (!file || file.size === 0) {
    throw new Error('Новый файл не выбран');
  }

  try {
    const blob = await put(file.name, file, { 
      access: 'public',
      addRandomSuffix: true 
    });

    await prisma.galleryImage.update({
      where: { id },
      data: { imageUrl: blob.url },
    });

    await del(oldImageUrl);

    revalidatePath('/');
    revalidatePath('/admin');
  } catch (error) {
    console.error("Error while updating image:", error);
    throw new Error("Cannot update image. Please try again later.");
  }
}