"use client";

import { useRef, useState } from "react";
import { updateGalleryImage } from "@/app/actions/upload";
import { cn } from "@/lib/utils";

interface Props {
  id: number;
  oldUrl: string;
  className?: string;
}
export const UpdateButton: React.FC<Props> = ({ className, id, oldUrl }) => {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      await updateGalleryImage(id, oldUrl, formData);
    } catch (error) {
      alert("Error occurred while updating image: " + (error as Error).message);
    } finally {
      setLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <button
        disabled={loading}
        onClick={() => fileInputRef.current?.click()}
        className={cn(
          "bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition",
          loading && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        {loading ? "..." : "Update"}
      </button>
    </>
  );
};
