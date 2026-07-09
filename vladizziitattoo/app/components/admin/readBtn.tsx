/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Props {
  className?: string;
  id: number;
  url: string;
}

export const ReadButton: React.FC<Props> = ({ className, id, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-500",
          className,
        )}
      >
        View
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-5xl p-1 bg-gray-500/50 max-h-screen w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-4xl font-light transition-colors"
            >
              &times;
            </button>
            <div className="flex justify-between w-full h-full gap-3">
              <img
                src={url}
                alt={`Work ${id}`}
                className="max-w-full outline outline-gray-500/35 max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <div className=" flex flex-col text-wrap wrap-anywhere gap-5 text-3xl">
                <p>ID: {id}</p>
                <p>URL: {url}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadButton;
