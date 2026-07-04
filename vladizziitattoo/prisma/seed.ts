import { prisma } from '../lib/prisma';

async function main() {
  console.log('Начинаем обновление базы данных...');

  const gallery = await prisma.gallery.upsert({
    where: { id: 1 },
    update: {},
    create: {},
  });

  await prisma.galleryImage.deleteMany({
    where: { galleryId: gallery.id },
  });

  console.log('Старые фото удалены. Загружаем новые ссылки...');

  const myVercelImages = [
    "https://orsccugvza8su6ik.public.blob.vercel-storage.com/photo_5352886997812452835_w.jpg",
    "https://orsccugvza8su6ik.public.blob.vercel-storage.com/photo_5352886997812452841_y.jpg",
    "https://orsccugvza8su6ik.public.blob.vercel-storage.com/photo_5352886997812452843_w.jpg",
    "https://orsccugvza8su6ik.public.blob.vercel-storage.com/photo_5352886997812452845_w.jpg",
    "https://orsccugvza8su6ik.public.blob.vercel-storage.com/photo_5352886997812452846_y.jpg",
    "https://orsccugvza8su6ik.public.blob.vercel-storage.com/photo_5352886997812452848_x.jpg",
    "https://orsccugvza8su6ik.public.blob.vercel-storage.com/photo_5352886997812452850_w.jpg",
    "https://orsccugvza8su6ik.public.blob.vercel-storage.com/photo_5352886997812452851_w.jpg",
    "https://orsccugvza8su6ik.public.blob.vercel-storage.com/photo_5352886997812452853_y.jpg",
  ];

  for (const url of myVercelImages) {
    await prisma.galleryImage.create({
      data: {
        imageUrl: url,
        galleryId: gallery.id,
      },
    });
  }

  console.log('Готово! Твои работы из Vercel Blob успешно добавлены в базу.');
}

main()
  .catch((e) => {
    console.error('Ошибка при сидировании:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });