import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    await prisma.galleryImage.create({
      data: {
        imageUrl: 'https://picsum.photos/200',
        galleryId: 1, 
      },
    });
    return NextResponse.json({ message: 'Картинка успешно добавлена!' });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка добавления' }, { status: 500 });
  }
}