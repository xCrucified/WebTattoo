/* eslint-disable @next/next/no-img-element */

import { uploadGalleryImage } from "@/app/actions/upload";
import { prisma } from "@/lib/prisma";

import Link from "next/link";

export default async function AdminDashboard() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="min-h-screen bg-black text-white p-10 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Link href="/" className="text-zinc-400 hover:text-white underline">
            Main page
          </Link>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 mb-10">
          <h2 className="text-xl mb-4">Add New Image</h2>
          <form action={uploadGalleryImage} className="flex gap-4 items-center">
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="flex-1 bg-zinc-800 p-2 rounded cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-zinc-700 file:text-white hover:file:bg-zinc-600"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-zinc-200 transition"
            >
              Download
            </button>
          </form>
        </div>

        <h2 className="text-xl mb-4">Images ({images.length})</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative aspect-square bg-zinc-800 rounded overflow-hidden"
            >
              <img
                src={img.imageUrl}
                alt={`Work ${img.id}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
