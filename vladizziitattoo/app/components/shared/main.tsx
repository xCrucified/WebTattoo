"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import CardImage from "../card_img/card";

interface Props {
  className?: string;
  images?: { id: number; imageUrl: string }[];
}

export const Main: React.FC<Props> = ({ className, images = [] }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          if (videoRef.current) {
            videoRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
          }
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log("Пришедшие картинки в Main:", images); // <--- СМОТРИ КОНСОЛЬ БРАУЗЕРА (F12)
  return (
    <main
      className={cn(
        className,
        "relative bg-black text-white text-2xl w-full min-h-screen overflow-hidden",
      )}
    >
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* stage 1 */}
        <div className="relative flex flex-col items-center justify-center h-dvh w-full px-6 overflow-hidden">
          {/* Background video */}

          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-35"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/bg3.mp4" type="video/mp4" />
          </video>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.33, ease: "easeInOut" }}
            className="relative z-10 flex flex-col self-center items-center gap-5 text-center max-w-3xl w-full"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full px-5 py-4 bg-gradient-to-r from-neutral-900 to-black text-white border border-white/20">
              <div className="w-2 h-2 rounded-full bg-white animate-glow" />
              <p className="max-sm:text-sm max-md:text-lg max-lg:text-xl max-xl:text-2xl font-light tracking-wide">
                Vladizzii Tattoo: Your new look.
              </p>
            </div>

            {/* Main text */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight leading-tight">
                Your story carved in the skin
              </h1>

              <p className="text-lg md:text-xl text-gray-300 opacity-80 font-light">
                From thin lines to large-scale projects. We create art that
                stays with you forever
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-8">
              <Button className="w-45 h-12 rounded-xl px-5 py-3 bg-black text-white border border-white/20 text-lg font-light animate-border">
                To enroll
              </Button>
              <Button className="w-45 h-12 font-light rounded-xl px-5 py-3 bg-black text-white border border-white/20 text-lg animate-border">
                Aesthetics of pain
              </Button>
            </div>

            {/* Scroll */}
            <div className="flex justify-center w-full items-center gap-3 mt-10 text-lg font-light text-gray-200 opacity-80">
              <p className="w-40">Scroll down</p>
              <hr className="w-40 opacity-40 hidden sm:block" />
              <Image
                src={"/main_img/mouse.svg"}
                alt=""
                width={25}
                height={20}
                className="animate-bounce translate-y-1"
              />
              <hr className="w-40 opacity-40 hidden sm:block" />
              <p className="w-40">to see projects</p>
            </div>
          </motion.div>
        </div>

        {/* stage 2 photos */}
        <div className="w-full h-screen">
          <div className="flex flex-row p-20 items-center justify-center w-full h-full gap-4">
            <div className="flex flex-col w-[24%] h-[90%] p-1 outline outline-1 outline-red-500 gap-2">
              {images.slice(0, 3).map((img) => (
                <CardImage key={img.id} src={img.imageUrl} />
              ))}
            </div>

            <div className="flex flex-col w-[31%] h-full p-3 outline outline-1 outline-green-500 gap-2">
              {images.slice(3, 6).map((img) => (
                <CardImage key={img.id} src={img.imageUrl} />
              ))}
            </div>

            <div className="flex flex-col w-[24%] h-[90%] p-1 outline outline-1 outline-blue-500 gap-2">
              {images.slice(6, 9).map((img) => (
                <CardImage key={img.id} src={img.imageUrl} />
              ))}
            </div>
          </div>
        </div>

        {/* stage 3 about me + recent works */}
        <div></div>

        {/* stage 4 process */}
        <div></div>

        {/* stage 5 services */}
        <div></div>

        {/* stage 6 client reviews(optional) */}
        <div></div>

        {/* stage 7 answers (optional) */}
        <div></div>
      </div>
    </main>
  );
};

export default Main;
