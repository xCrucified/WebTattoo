import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <main
      className={cn(
        className,
        "relative bg-black text-white text-2xl w-full min-h-screen overflow-hidden",
      )}
    >
      <video
        className="absolute top-0 left-0 object-cover w-full h-screen opacity-35"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg3hevc.mp4" type="video/mp4" className="w-full h-full" />
      </video>

      <div className="relative z-10 w-full flex flex-col items-center justify-start gap-5 h-full">
        {/* stage 1 main */}
        <div className="flex flex-col justify-center items-center gap-5 w-full min-h-screen px-6">
          {/* Badge */}
          <div
            className="
            inline-flex items-center gap-3
            rounded-full px-5 py-3
            bg-linear-to-r from-neutral-900 to-black
            text-white
            border border-white/20
          "
          >
            <div
              className="
                w-2 h-2 rounded-full bg-white animate-glow
                shadow-[0_0_10px_rgba(255,255,255,0.9)]
              "
            />
            <p className="text-lg md:text-base font-light tracking-wide">
              Vladizzii Tattoo: Your new look.
            </p>
          </div>

          {/* Main text */}
          <div className="flex flex-col gap-6 text-center max-w-3xl">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight leading-tight">
              Your story carved in the skin
            </h1>

            <p className="text-lg md:text-xl text-gray-300 opacity-80 font-light">
              From thin lines to large-scale projects. We create art that stays with you forever
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-8">
            <Button
              className="w-45 h-12 rounded-xl px-5 py-3
       bg-black
      text-white
      border border-white/20 text-lg font-light animate-border"
            >
              To enroll
            </Button>
            <Button
              className="w-45 h-12 font-light rounded-xl px-5 py-3
       bg-black
      text-white
      border border-white/20 text-lg animate-border"
            >
              Aesthetics of pain
            </Button>
          </div>
          <div
            className="flex justify-center w-full items-center text-center gap-3 mt-10 text-lg font-light text-gray-200 opacity-80"
          >
            <p className="w-40">Scroll down</p>
            <hr className="w-40 opacity-40 hidden sm:block"/>
            <Image src={"/main_img/mouse.svg"} alt={""} width={25} height={20} className="animate-bounce translate-y-1"></Image>
            <hr className="w-40 opacity-40 hidden sm:block"/>
            <p className="w-40">to see projects</p>
          </div>
          
        </div>

        {/* stage 2 photos */}
        <div className=" w-full h-screen">
          a
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
