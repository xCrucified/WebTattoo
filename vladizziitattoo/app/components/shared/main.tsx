/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

import { Image_Modal } from "../modal/image_modal";
import Background from "../ui/background";
import VelocityCarousel from "../ui/carouselCard";
import CardImage from "../card_img/card";

interface Props {
  className?: string;
  images?: { id: number; imageUrl: string }[];
}

const about_me_text = `Hi, I'm Vlada! I craft custom, meaningful tattoos with strict attention to detail. Working in a sterile, welcoming environment, I provide a personalized experience from initial design to complete aftercare. Let's bring your vision to life.`;

const skills = [
  "Tattoo Design",
  "Color Tattooing",
  "Lettering",
  "Cover-ups",
  "Geometric Tattoos",
  "Neotribal Tattoos",
  "Japanese Style",
  "Minimalist Tattoos",
  "Dotwork",
  "Surrealism",
];

const workflow = [
  ["Tattoo Artist", "Tatooruffka Studio", "Currently"],
  ["Cover-ups", "Reworking old tattoos", "On Request"],
  ["Flash Designs", "Ready-to-ink Concepts", "Available"],
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
          <Background ref={videoRef} />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.33, ease: "easeInOut" }}
            className="relative z-10 flex flex-col self-center items-center gap-5 text-center max-w-3xl w-full"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full px-5 py-4 bg-linear-to-r from-neutral-900 to-black text-white border border-white/20">
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

        <div className="flex flex-col justify-around items-center w-full min-h-screen">
          <div className="flex flex-row p-20 items-center justify-center w-full h-full inset-0">
            <div
              className="flex flex-col w-[24%] h-245 p-1 gap-2
                            max-xl:w-[50%] max-xl:h-275 max-lg:p-3"
            >
              {images.slice(0, 3).map((img) => (
                <CardImage
                  key={img.id}
                  src={img.imageUrl}
                  onClick={() => {
                    setSelectedImage(img);
                  }}
                />
              ))}
              {/*make a collage photo gallery, 1-photo=every filter, every type of the same photo */}
            </div>

            <div
              className="flex flex-col w-[31%] h-275 p-3 gap-2
                            max-xl:hidden"
            >
              {images.slice(3, 6).map((img) => (
                <CardImage
                  key={img.id}
                  src={img.imageUrl}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            <div
              className="flex flex-col w-[24%] h-245 p-1 gap-2
                            max-xl:w-[50%] max-xl:h-275 max-lg:p-3"
            >
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
        <div className="flex flex-col w-full min-h-screen justify-center py-10">
          <div
            className="flex w-[70%] items-center justify-around mx-auto gap-5 
                    max-xl:flex-col"
          >
            <div
              className="flex flex-col w-[50%] justify-center text-start
                      max-xl:min-w-[95%]"
            >
              <h1 className="text-7xl font-light text-white">Meet Vlada</h1>
              <p className="mt-5 text-lg text-gray-100/75">{about_me_text}</p>
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
              <div className="flex w-full flex-col items-start text-sm md:text-base lg:text-xl gap-4 text-gray-100/65">
                {workflow.map((wf, index) => (
                  <div
                    key={index}
                    className="flex w-full flex-row items-center"
                  >
                    {wf.map((text, i) => (
                      <p
                        key={i}
                        className={`w-1/3 ${i === 2 ? "text-right" : "text-left"}`}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex w-[35%] items-center justify-center
                      max-xl:w-[65%] max-xl:mt-10"
            >
              <img
                src={"./main_img/photo_5355173969113325595_x.jpg"}
                alt="Profile"
                className="w-full h-full object-fill"
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-20 mx-auto mt-14 justify-start items-start max-xl:w-[70%] max-xl:justify-center">
            <button className="flex w-[40%] max-xl:w-full items-center justify-center gap-2 hover:opacity-75 transition-opacity cursor-pointer">
              <p className="text-xl text-gray-200/75">Recent works</p>
              <img
                width={24}
                height={24}
                src={"./icons/swap-to-works.svg"}
                alt="Works"
              />
            </button>
            <VelocityCarousel images={images} />
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
