import Main from "./components/shared/main";
import Footer from "./components/shared/footer";
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="relative w-full">
      <Main images={images}/>
      <Footer className="z-0"/>
    </div>
  );
}
