"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

interface Routes {
  id: number;
  img: string;
  alt: string;
  link: string;
  width: number;
  height: number;
}
const route: Routes[] = [
  {
    id: 0,
    img: "/footer_img/instagram.svg",
    alt: "instagram image",
    link: "https://www.instagram.com/vladizzii.tattoo?igsh=ZmUwaWp6MzYxbm51",
    width: 25,
    height: 25,
  },
  {
    id: 1,
    img: "/footer_img/facebook.svg",
    alt: "facebook image",
    link: "https://www.facebook.com/share/1F3oGWSjBF/?mibextid=wwXIfr",
    width: 25,
    height: 25,
  },
  {
    id: 2,
    img: "/footer_img/tiktok.svg",
    alt: "tiktok image",
    link: "https://www.tiktok.com/@vladizzii.tattoo?_r=1&_t=ZN-93ccDy1o2aM",
    width: 25,
    height: 25,
  },
];

export const Footer: React.FC<Props> = ({ className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [, setSize] = useState({ width: 0, height: 0 });
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
          <div className="text-5xl text-center">
            Curious about what we can create together? Let’s bring something
            extraordinary to life!
          </div>
          <Button
            onClick={() => (window.location.href = "/booking")}
            className="
    relative
    flex items-center justify-center
    h-[65px] w-[260px]
    rounded-3xl
  text-white text-lg font-medium
    ring-1 ring-white/10

    transition-all duration-200 ease-in-out
    hover:ring-white/25
    hover:scale-[1.02]
    hover:bg-gradient-to-r hover:from-neutral-900 hover:to-black
    active:scale-[0.98]
  "
          >
            Make an appointment
          </Button>

          <div className="flex items-center gap-5 mb-10">
            {route.map((x, index) => (
              <div className="flex gap-5 items-center" key={x.id}>
                <a href={x.link}>
                  <Image
                    src={x.img}
                    alt={x.alt}
                    width={x.width}
                    height={x.height}
                  />
                </a>

                {index !== route.length - 1 && (
                  <hr className="h-6 border-0 border-l border-white/30" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 w-full items-center text-white text-center">
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            Developed by{" "}
            <a
              href="https://your-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              xCrucified
            </a>
          </div>
          <div>
            <a href="_blank">All rights reserved </a> © 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
