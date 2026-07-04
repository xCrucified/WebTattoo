import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  src: string; 
  alt?: string;
}

export const CardImage: React.FC<Props> = ({ className, src, alt = "Tattoo work" }) => {
  console.log("CardImage пытается отрендерить:", src);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
      />
    </div>
  );
};

export default CardImage;