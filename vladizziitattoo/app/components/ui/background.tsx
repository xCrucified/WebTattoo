import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface Props {
  className?: string;
}

export const Background = forwardRef<HTMLVideoElement, Props>(({ className }, ref) => {
  return (
    <video
      ref={ref}
      className={cn("absolute top-0 left-0 w-full h-full object-cover opacity-35", className)}
      autoPlay
      poster="/fallback-image.jpg"
      loop
      muted
      playsInline
    >
      <source src="/bg3.mp4" type="video/mp4" />
    </video>
  );
});

Background.displayName = "Background";

export default Background;