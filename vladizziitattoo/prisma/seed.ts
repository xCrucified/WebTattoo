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
    'https://v5pqvykmhodxc6og.private.blob.vercel-storage.com/photo_5352886997812452853_y.jpg?vercel-blob-valid-until=1783207540447&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfVjVwcVZZa21ob0RYQzZPRyIsIm93bmVySWQiOiJ0ZWFtX2tDVlVqaWRuNlU5eGtqbVNLRGZVeFFXQiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMjUwNjY4OTc3LCJpYXQiOjE3ODMyMDc0NjkwNDN9.9vW3mSjIRoUEvPQLv6Ak0wzqEZ5ZG8vMSBzCtdoEld8&vercel-blob-signature=x2E25LdiMe-lYFrdGKtFiT6ZVuQ6foo_qUSCzswHbNw',
    'https://v5pqvykmhodxc6og.private.blob.vercel-storage.com/photo_5352886997812452851_w.jpg?vercel-blob-valid-until=1783207553503&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfVjVwcVZZa21ob0RYQzZPRyIsIm93bmVySWQiOiJ0ZWFtX2tDVlVqaWRuNlU5eGtqbVNLRGZVeFFXQiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMjUwNjY4OTc3LCJpYXQiOjE3ODMyMDc0NjkwNDN9.9vW3mSjIRoUEvPQLv6Ak0wzqEZ5ZG8vMSBzCtdoEld8&vercel-blob-signature=qfqI1pYRWqWF7fRHBsbPYSD8qJZ2qgRcoyp-sYn-dn0',
    'https://v5pqvykmhodxc6og.private.blob.vercel-storage.com/photo_5352886997812452850_w.jpg?vercel-blob-valid-until=1783207560910&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfVjVwcVZZa21ob0RYQzZPRyIsIm93bmVySWQiOiJ0ZWFtX2tDVlVqaWRuNlU5eGtqbVNLRGZVeFFXQiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMjUwNjY4OTc3LCJpYXQiOjE3ODMyMDc0NjkwNDN9.9vW3mSjIRoUEvPQLv6Ak0wzqEZ5ZG8vMSBzCtdoEld8&vercel-blob-signature=edGu9EnfUnbAGtS1t6e1Ya7WUP3wBo96atnI4UUDuLQ',
    'https://v5pqvykmhodxc6og.private.blob.vercel-storage.com/photo_5352886997812452848_x.jpg?vercel-blob-valid-until=1783207621317&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfVjVwcVZZa21ob0RYQzZPRyIsIm93bmVySWQiOiJ0ZWFtX2tDVlVqaWRuNlU5eGtqbVNLRGZVeFFXQiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMjUwNjY4OTc3LCJpYXQiOjE3ODMyMDc0NjkwNDN9.9vW3mSjIRoUEvPQLv6Ak0wzqEZ5ZG8vMSBzCtdoEld8&vercel-blob-signature=UEm1M2BrO9ZAAvNDQgzn6CtHbGy1yWvGrOzf9qkru5I',
    'https://v5pqvykmhodxc6og.private.blob.vercel-storage.com/photo_5352886997812452846_y.jpg?vercel-blob-valid-until=1783207627409&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfVjVwcVZZa21ob0RYQzZPRyIsIm93bmVySWQiOiJ0ZWFtX2tDVlVqaWRuNlU5eGtqbVNLRGZVeFFXQiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMjUwNjY4OTc3LCJpYXQiOjE3ODMyMDc0NjkwNDN9.9vW3mSjIRoUEvPQLv6Ak0wzqEZ5ZG8vMSBzCtdoEld8&vercel-blob-signature=XrCz9_IkwpEDIBXO0sPqZcFr4LorC-h9_aALkWJPn6Y',
    'https://v5pqvykmhodxc6og.private.blob.vercel-storage.com/photo_5352886997812452845_w.jpg?vercel-blob-valid-until=1783207633010&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfVjVwcVZZa21ob0RYQzZPRyIsIm93bmVySWQiOiJ0ZWFtX2tDVlVqaWRuNlU5eGtqbVNLRGZVeFFXQiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMjUwNjY4OTc3LCJpYXQiOjE3ODMyMDc0NjkwNDN9.9vW3mSjIRoUEvPQLv6Ak0wzqEZ5ZG8vMSBzCtdoEld8&vercel-blob-signature=ASNvlrL4y8hCCk518WBRal_ihJ9GBEwlRsmzRA13HK4',
    'https://v5pqvykmhodxc6og.private.blob.vercel-storage.com/photo_5352886997812452843_w.jpg?vercel-blob-valid-until=1783207639501&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfVjVwcVZZa21ob0RYQzZPRyIsIm93bmVySWQiOiJ0ZWFtX2tDVlVqaWRuNlU5eGtqbVNLRGZVeFFXQiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMjUwNjY4OTc3LCJpYXQiOjE3ODMyMDc0NjkwNDN9.9vW3mSjIRoUEvPQLv6Ak0wzqEZ5ZG8vMSBzCtdoEld8&vercel-blob-signature=0YMCJzNDfL4pH3LkSCH2KL4bQXTJz_3KF34HNG43JkM',
    'https://v5pqvykmhodxc6og.private.blob.vercel-storage.com/photo_5352886997812452841_y.jpg?vercel-blob-valid-until=1783207644374&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfVjVwcVZZa21ob0RYQzZPRyIsIm93bmVySWQiOiJ0ZWFtX2tDVlVqaWRuNlU5eGtqbVNLRGZVeFFXQiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMjUwNjY4OTc3LCJpYXQiOjE3ODMyMDc0NjkwNDN9.9vW3mSjIRoUEvPQLv6Ak0wzqEZ5ZG8vMSBzCtdoEld8&vercel-blob-signature=GaHu0YdZvKwjuD21CphHO8mEq-lnAtvDkxCrH3s-C0o',
    'https://v5pqvykmhodxc6og.private.blob.vercel-storage.com/photo_5352886997812452835_w.jpg?vercel-blob-valid-until=1783207650881&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfVjVwcVZZa21ob0RYQzZPRyIsIm93bmVySWQiOiJ0ZWFtX2tDVlVqaWRuNlU5eGtqbVNLRGZVeFFXQiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMjUwNjY4OTc3LCJpYXQiOjE3ODMyMDc0NjkwNDN9.9vW3mSjIRoUEvPQLv6Ak0wzqEZ5ZG8vMSBzCtdoEld8&vercel-blob-signature=CGRb7bvOmFOoLpML3r1IOT5-QomJNbTsy0Xh-zjNcrw'
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