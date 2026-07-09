'use client';

import { useState } from 'react';
import { uploadGalleryImage } from '@/app/actions/upload';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const CreateButton: React.FC<Props> = ({ className }) => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    try {
      await uploadGalleryImage(formData);
      alert("Photo uploaded successfully!");
    } catch (e) {
      alert("Error uploading photo: " + (e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={cn(className, "bg-zinc-900 p-6 rounded-lg border border-zinc-800 mb-10")}>
      <h2 className="text-xl mb-4">Add New Image</h2>
      <form action={handleSubmit} className="flex gap-4 items-center">
        <input type="file" name="image" accept="image/*" required className="flex-1 bg-zinc-800 p-2 rounded cursor-pointer" />
        <button 
          type="submit" 
          disabled={loading}
          className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-zinc-200 transition"
        >
          {loading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>
    </div>
  );
}