/* eslint-disable @next/next/no-img-element */
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import ImageForm from "../components/imageForm";

export default async function AdminDashboard() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="min-h-screen bg-black text-white p-10 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Link href="/" className="text-zinc-400 hover:text-white underline">Main page</Link>
        </div>

        <ImageForm />

        <h2 className="text-xl mb-4">Images ({images.length})</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img) => (
            <div key={img.id} className="relative aspect-square bg-zinc-800 rounded overflow-hidden">
              <img src={img.imageUrl} alt="Work" className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}