'use client';

import { deleteGalleryImage } from '@/app/actions/upload';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  id: number
  url: string
}

export const DeleteButton: React.FC<Props> = ({className, id, url}) => {
  return (
    <button
      onClick={() => deleteGalleryImage(id, url)}
      className={cn(className, "bg-red-600 text-white p-1 rounded hover:bg-red-700")}
    >
      Delete
    </button>
  );
}