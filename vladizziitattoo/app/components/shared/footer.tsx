"use client";

import { cn } from "@/lib/utils";
import React from "react";
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

const routes: Routes[] = [
  {
    id: 0,
    img: "/footer_img/instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/vladizzii.tattoo?igsh=ZmUwaWp6MzYxbm51",
    width: 25,
    height: 25,
  },
  {
    id: 1,
    img: "/footer_img/facebook.svg",
    alt: "Facebook",
    link: "https://www.facebook.com/share/1F3oGWSjBF/?mibextid=wwXIfr",
    width: 25,
    height: 25,
  },
  {
    id: 2,
    img: "/footer_img/tiktok.svg",
    alt: "TikTok",
    link: "https://www.tiktok.com/@vladizzii.tattoo?_r=1&_t=ZN-93ccDy1o2aM",
    width: 25,
    height: 25,
  },
];

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("relative overflow-hidden bg-black", className)}>
      <div className="absolute top-0 left-0 w-full h-54 bg-linear-to-t from-0% to-black pointer-events-none z-20" />
      {/* Background video */}
      <video
        className="
    absolute inset-0
    h-full w-full object-cover
    opacity-20
    grayscale
  "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg3.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div
        className="
          relative z-10
          flex flex-col items-center
          px-6 py-32
        "
      >
        <div
          className="
            flex w-full max-w-5xl
            flex-col items-center
            gap-12
          "
        >
          {/* Available badge */}
          <div
            className="
              inline-flex items-center gap-4
              rounded-full border-l border-white/30
              bg-gradient-to-r from-neutral-900 to-black
              px-6 py-5 text-white
            "
          >
            <div
              className="
                h-3 w-3 rounded-full bg-white
                shadow-[0_0_10px_rgba(255,255,255,0.9)]
                animate-pulse
              "
            />

            <p className="text-lg font-medium md:text-2xl">
              Available For Work
            </p>
          </div>

          {/* Title */}
          <h2
            className="
              max-w-4xl text-center
              text-3xl font-light leading-tight
              text-white
              md:text-5xl
            "
          >
            Curious about what we can create together? Let’s bring something
            extraordinary to life.
          </h2>

          {/* CTA */}
          <Link href="/booking">
            <Button
              className="
                h-16 w-64 rounded-3xl
                text-lg font-medium text-white
                ring-1 ring-white/10
                transition duration-300
                hover:ring-white/20
                active:ring-white/30
              "
            >
              Make an appointment
            </Button>
          </Link>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {routes.map((x, index) => (
              <React.Fragment key={x.id}>
                <a
                  href={x.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-opacity duration-300
                    hover:opacity-70
                  "
                >
                  <Image
                    src={x.img}
                    alt={x.alt}
                    width={x.width}
                    height={x.height}
                  />
                </a>

                {index !== routes.length - 1 && (
                  <div className="h-6 w-px bg-white/30" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            relative z-10 mt-20
            grid w-full max-w-6xl
            gap-4 text-center
            text-sm font-light text-white/60
            md:grid-cols-3
          "
        >
          <Link href="/privacy-policy">Privacy Policy</Link>

          <a
            href="https://xcrucified.cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by xCrucified
          </a>

          <p>All rights reserved © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
