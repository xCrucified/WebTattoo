import { prisma } from '../lib/prisma'; 

async function main() {
  await prisma.galleryImage.create({
    data: {
      imageUrl: 'https://picsum.photos/200',
      galleryId: 1,
    },
  });
  console.log('Готово! Картинка добавлена.');
}

main().catch(console.error);