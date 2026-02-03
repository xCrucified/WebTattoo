"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({
        width: Math.round(width),
        height: Math.round(height),
      });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <footer
      className={cn(
        className,
        "relative flex justify-between items-center flex-col bottom-0 w-full h-[100vh] bg-[#000000]",
      )}
    >
      {/*  */}
      <div className="flex flex-col items-center justify-center outline-1 w-full h-full mb-20 mt-60">
        <div className="flex flex-col items-center justify-center w-[80%] h-full gap-15">
          <div className="flex items-center justify-center gap-3 rounded-full outline-1 p-6">
            <div className="w-2.5 h-2.5 bg-white rounded-4xl"></div>
            <p className="text-xl">Circle and Avaible for work</p>
          </div>
          <div className="text-6xl w-full text-center font-bold">
            Curious about what we can create together? Let’s bring something
            extraordinary to life!
          </div>
          <Button onClick={() => window.location.href = "/booking"}>btn Book a Free Call</Button>
          <div>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div className="grid grid-cols-3 col-start-1 w-full items-center justify-around  text-white text-center">
          <div className="outline-1" ref={ref}>
            vladizziitattoo@gmail.com
          </div>
          <div className="outline-1" ref={ref}>
            Design By xCrucified
          </div>
          <div className="outline-1">
            All rights reserved, Vladizzii Tattoo © 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
