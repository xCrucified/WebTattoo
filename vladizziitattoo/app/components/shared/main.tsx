/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import CardImage from "../card_img/card";
import { Image_Modal } from "../modal/image_modal";

interface Props {
  className?: string;
  images?: { id: number; imageUrl: string }[];
}

const about_me_text = `Hi! I'm Vlada, a tattoo artist turning your ideas into meaningful, long-lasting tattoos. Every piece is a personal story crafted with strict attention to detail. Your safety is my priority, so I use only sterile, single-use equipment in a clean, professional environment. I offer a personalized approach from custom design to complete aftercare, ensuring you get a tattoo you'll proudly wear forever.
If you're looking for quality, professionalism, a personalized experience, and a welcoming atmosphere, I'd be happy to bring your vision to life.`;

const skills = [
  "Tattoo Design",
  "Color Tattooing",
  "Lettering",
  "Cover-ups",
  "Geometric Tattoos",
  "Watercolor Tattoos",
  "Neotribal Tattoos",
  "Japanese Style",
  "Minimalist Tattoos",
  "Dotwork",
  "Surrealism",
];

export const Main: React.FC<Props> = ({ className, images = [] }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    imageUrl: string;
  } | null>(null);
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
  console.log("image in main:", images);
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
            poster="/fallback-image.jpg"
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
          <div className="absolute bottom-0 left-0 w-full h-84 bg-linear-to-b from-transparent to-black pointer-events-none z-20" />
        </div>
        {/* stage 2 photos */}

        <div className="flex flex-col justify-around items-center w-full h-[140vh]">
          <div className="flex flex-row p-20 items-center justify-center w-full h-full inset-0">
            <div className="flex flex-col w-[24%] h-245 p-1 gap-2
                            max-xl:w-[50%] max-xl:h-275 max-lg:p-3">
              {images.slice(0, 3).map((img) => (
                <CardImage
                  key={img.id}
                  src={img.imageUrl}
                  onClick={() => {
                    setSelectedImage(img);
                  }}
                />
              ))}
            </div>

            <div className="flex flex-col w-[31%] h-275 p-3 gap-2
                            max-xl:hidden">
              {images.slice(3, 6).map((img) => (
                <CardImage
                  key={img.id}
                  src={img.imageUrl}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            <div className="flex flex-col w-[24%] h-245 p-1 gap-2
                            max-xl:w-[50%] max-xl:h-275 max-lg:p-3">
              {images.slice(6, 9).map((img) => (
                <CardImage
                  key={img.id}
                  src={img.imageUrl}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 text-lg">
            <a href="#" className="underline font-light">
              All Projects
            </a>
            <button
              onClick={() => {
                console.log("Book a Free Consultation clicked");
              }}
              className="relative inline-flex p-px bg-linear-to-tr from-black via-white/30 to-white rounded-[20px] transition-transform duration-300 active:scale-95"
            >
              <div className="px-3 py-2 bg-black rounded-[19px] w-full h-full flex items-center justify-center hover:bg-[#0a0a0a] transition-colors duration-300">
                <span className="text-white font-light">
                  Book a Free Consultation
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* stage 3 about me + recent works */}
        <div className="w-full h-screen">
          <div className="flex w-[90%] h-[80%] items-center justify-center mx-auto gap-40">
            <div className="flex flex-col w-[45%] justify-center text-start">
              <h1 className="text-7xl font-light text-white">Meet Vlada</h1>
              <p className="mt-5 text-lg text-gray-100/75">
                {about_me_text}
              </p>
              <hr className="w-full h-px border-gray-400/10 rounded-full mt-4 mb-4" />
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 text-white/70 rounded-md text-sm font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <hr className="w-full h-px border-gray-400/10 rounded-full mt-4 mb-4" />
              <div className="flex min-w-full flex-col items-start text-xl gap-8">
                <div className="flex w-full justify-between flex-row gap-2">
                  <p className="text-gray-100/65">Tattoo Artist</p>
                  <p className="text-gray-100/65">Tatooruffka</p>
                  <p className="text-gray-100/65">2025 - Currently</p>
                </div>
              </div>
              <hr className="w-full h-px border-gray-400/10 rounded-full mt-4 mb-4" />
              
            </div>
            <div className="flex w-[25%] items-center justify-center">
              <img
                src={"./main_img/photo_5355173969113325595_x.jpg"}
                alt="Profile"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>

        {/* stage 4 process */}
        <div></div>

        {/* stage 5 services */}
        <div></div>

        {/* stage 6 client reviews(optional) */}
        <div></div>

        {/* stage 7 answers (optional) */}
        <div></div>
      </div>
      {selectedImage && (
        <Image_Modal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  );
};

export default Main;
