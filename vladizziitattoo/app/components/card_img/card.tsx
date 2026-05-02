import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
interface Props {
  className?: string;
  images: string[];
}

export const CardImage: React.FC<Props> = ({ className, images }) => {
  return (
    <div className={cn("w-full h-full object-cover", className)}>
      {images.map((src, index) => (
        <Image key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
      ))}
    </div>
  );
};

export default CardImage;