import Main from "./components/shared/main";
import Footer from "./components/shared/footer";
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const recentImages = await prisma.galleryImage.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="relative w-full">
      <Main images={recentImages}/>
      <Footer className="z-0"/>
    </div>
  );
}
