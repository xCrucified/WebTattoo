'use client';
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export const TermsOfService: React.FC<Props> = ({ className }) => {
  const [isSmall, isSmallWindow] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      isSmallWindow(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const text = ``;

  const sentences = text.split(".").filter((s) => s.trim() !== "");

  return (
    <div className={cn(className, "flex mt-80 gap-5 w-full h-full")}>
      {isSmall && ( <hr className="ml-6 h-[41rem] border-0 border-l border-white/30 self-end" />)}
      <div className="flex flex-col gap-10 sm:mx-auto sm:w-[50%] w-[70%] text-pretty sm:text-center">
        <h1 className="sm:text-5xl text-4xl font-light">Terms Of Service</h1>
        <div className="sm:text-xl text-pretty text-gray-400 space-y-2">
          {sentences.map((sentence, index) => (
            <p key={index}>{sentence.trim()}.</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
