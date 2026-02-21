import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <main
      className={cn(
        className,
        "relative mt-32 text-white text-2xl w-full min-h-screen overflow-hidden",
      )}
    >
      <video
        className="absolute top-0 left-0 object-cover w-full h-[100vh]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" className="w-full h-full" />
      </video>

      <div className="content relative z-10 w-full h-[100vh]">
        <h1>Твой заголовок</h1>
      </div>
    </main>
  );
};

export default Main;
