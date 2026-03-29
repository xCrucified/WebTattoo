import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <main
      className={cn(
        className,
        "relative mt-32 bg-black text-white text-2xl w-full min-h-screen overflow-hidden",
      )}
    >
      <video
        className="absolute top-0 left-0 object-cover w-full h-[100vh] opacity-35"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg3hevc.mp4" type="video/mp4" className="w-full h-full" />
      </video>

      <div className="relative z-10 w-[100%] h-[100vh] flex flex-col items-center justify-start gap-20">
        {/* stage 1 main */}
        <div className="flex flex-col justify-center items-center outline-2 gap-6 w-full outline-red-500">
          <div
            className="
            inline-flex items-center gap-4
            rounded-full px-5 py-4
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

            <p className="text-1xl font-medium tracking-wide">
              Crafting Unique Brand Identities
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center w-[31%] outline-1">
            <h1 className="text-7xl font-light">Branding that you  need Indeed</h1>
            <p className="text-xl text-gray-300 opacity-75">
              Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
            </p>
          </div>
          <div>
            <Button>Get Started Now</Button>
            <Button>See Projects</Button>
          </div>
        </div>

        {/* stage 2 photos */}
        <div>

        </div>

        {/* stage 3 about me + recent works */}
        <div>

        </div>

        {/* stage 4 process */}
        <div>

        </div>

        {/* stage 5 services */}
        <div>

        </div>

        {/* stage 6 client reviews(optional) */}
        <div>

        </div>

        {/* stage 7 answers (optional) */}
        <div>

        </div>
      </div>
    </main>
  );
};

export default Main;
