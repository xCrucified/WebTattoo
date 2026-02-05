"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

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
      <div className="flex flex-col items-center justify-center w-full h-full mb-20 mt-60">
        <div className="flex flex-col items-center justify-center w-[80%] h-full gap-15">
          <div
            className="
  inline-flex items-center gap-4
  rounded-full px-6 py-5
  bg-gradient-to-r from-neutral-900 to-black
  text-white
  border-l-[0.5px] border-white/30
"
          >
            <div
              className="
    w-3 h-3 rounded-full bg-white animate-glow
    shadow-[0_0_10px_rgba(255,255,255,0.9)]
  "
            />

            <p className="text-2xl font-medium tracking-wide">
              Available For Work
            </p>
          </div>
          <div className="text-5xl w-[70rem] text-center">
            Curious about what we can create together? Let’s bring something
            extraordinary to life!
          </div>
          <Button className="ring-1 ring-white/10  hover:border-y-2  border-white/30 rounded-3xl hover:border-white/20 duration-160 p-5 h-[65px] w-[260px] text-lg" 
                  onClick={() => (window.location.href = "/booking")}>
            <p>Make an appointment</p>
          </Button>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/vladizzii.tattoo?igsh=ZmUwaWp6MzYxbm51">
              <Image
                src="/footer_img/instagram.svg"
                alt="instagram image"
                width={25}
                height={25}
              />
            </a>
            <hr className="h-6 border-0 border-l border-white/30" />
            <a href="https://www.facebook.com/share/1F3oGWSjBF/?mibextid=wwXIfr">
              <Image
                src="/footer_img/facebook.svg"
                alt="facebook image"
                width={25}
                height={25}
              />
            </a>
            <hr className="h-6 border-0 border-l border-white/30" />
            <a href="https://www.tiktok.com/@vladizzii.tattoo?_r=1&_t=ZN-93ccDy1o2aM">
              <Image
                src="/footer_img/tiktok.svg"
                alt="tiktok image"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 col-start-1 w-full items-center justify-around  text-white text-center">
          <div className="" ref={ref}>
            Privacy Policy | Terms of Service
          </div>
          <div className="" ref={ref}>
            Design By StarBoi inc.
          </div>
          <div className="">
            All rights reserved, Vladizzii Tattoo © 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
