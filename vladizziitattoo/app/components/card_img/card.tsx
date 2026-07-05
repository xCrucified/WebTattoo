/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  src: string;
  alt?: string;
  onClick?: () => void;
}

export const CardImage: React.FC<Props> = ({
  className,
  src,
  alt = "Tattoo work",
  onClick,
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out transform 
                     grayscale-100 hover:grayscale-0 hover:scale-105" 
        />
      </div>
    </div>
  );
};

export default CardImage;