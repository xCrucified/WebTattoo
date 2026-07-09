/* eslint-disable @next/next/no-img-element */
import { prisma } from "@/lib/prisma";
import Link from "next/link";


import { ReadButton } from "../components/admin/readBtn";
import { UpdateButton } from "../components/admin/updateBtn";
import { CreateButton } from "../components/admin/createBtn";
import { DeleteButton } from "../components/admin/deleteBtn";

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

        <CreateButton />

        <h2 className="text-xl mb-4">Images ({images.length})</h2>
        <div className="flex flex-wrap shrink-0 w-full h-full gap-4 mb-10">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative aspect-square bg-zinc-800 rounded overflow-hidden w-70 h-70"
            >
              <img
                src={img.imageUrl}
                alt="Work"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center">
                <p className="text-sm">ID: {img.id}</p>
              </div>
              <span className="absolute top-1 left-0 right-0 px-2 flex  justify-between items-start w-full">
                <DeleteButton id={img.id} url={img.imageUrl} />
                <UpdateButton id={img.id} oldUrl={img.imageUrl} />
                <ReadButton id={img.id} url={img.imageUrl} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
