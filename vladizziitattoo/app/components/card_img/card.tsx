/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  src: string;
  alt?: string;
}

export const CardImage: React.FC<Props> = ({
  className,
  src,
  alt = "Tattoo work",
}) => {

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <div className="relative w-full h-full"> 
        <img
          src={src} 
          alt={alt}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default CardImage;