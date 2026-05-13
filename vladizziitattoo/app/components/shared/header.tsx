"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import AdCarousel from "./ad-carousel";
import { SignUp_Modal } from "../modal/sign-upModal";

interface Props {
  className?: string;
}

interface Routes {
  name: string;
  path: string;
}

const routes: Routes[] = [
  { name: "Home", path: "." },
  { name: "Gallery", path: "#gallery" },
  { name: "About", path: "#about" },
  { name: "Testimonials", path: "#testimonials" },
];

export const Header: React.FC<Props> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isSomethingOpen = isMenuOpen || isModalOpen;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <AdCarousel className="absolute top-0 z-10" />

      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.33, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 z-50 flex h-20 w-full justify-center px-4",
          className,
        )}
      >
        <div
          className="
            flex h-full w-full max-w-3xl max-lg:max-w-xl items-center
            rounded-4xl border border-gray-600/15
            bg-black/70 px-6
            shadow-md backdrop-blur-sm
          "
        >
          {/* Logo */}
          <a
            href="."
            className="nav-item flex h-full items-center justify-center"
          >
            <Image
              src="/header_img/rose.svg"
              alt="Vladizzi Tattoo Logo"
              width={45}
              height={45}
            />
          </a>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop nav */}
          <ul className="hidden h-full items-center gap-3 lg:flex">
            {routes.map((route) => (
              <li key={route.path}>
                <a
                  href={route.path}
                  className="
                    nav-item flex items-center justify-center
                    px-6 py-4 text-xl font-light
                    duration-300 active:scale-105
                  "
                >
                  {route.name}
                </a>
              </li>
            ))}

            {/* Divider */}
            <li>
              <div className="h-10 w-px bg-white/10" />
            </li>

            {/* Schedule */}
            <li>
              <button
                onClick={() => setIsModalOpen((prev) => !prev)}
                className="
                  nav-item flex items-center justify-center
                  px-6 py-4 text-xl font-light
                  duration-300 active:scale-95
                "
              >
                Schedule
              </button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => {
                if (isModalOpen) {
                  setIsModalOpen(false);
                  return;
                }

                setIsMenuOpen((prev) => !prev);
              }}
              className="flex items-center justify-center"
            >
              <Image
  src={
    isSomethingOpen
      ? "/header_img/close.svg"
      : "/header_img/menu.svg"
  }
  width={32}
  height={32}
  alt={isSomethingOpen ? "Close menu" : "Open menu"}
/>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="
                absolute top-24 w-[70%]
                rounded-3xl border border-white/10
                bg-black/90 p-6 backdrop-blur-xl
                lg:hidden
              "
            >
              <ul className="flex flex-col gap-4">
                {routes.map((route) => (
                  <li key={route.path}>
                    <a
                      href={route.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-light"
                    >
                      {route.name}
                    </a>
                  </li>
                ))}

                <button
                  onClick={() => {
                    setIsModalOpen((prev) => !prev);
                    setIsMenuOpen(false);
                  }}
                  className="mt-4 text-left text-lg font-light"
                >
                  Schedule
                </button>
              </ul>
            </motion.div>
          )}
          {isModalOpen && (
            <SignUp_Modal
              className="absolute items-center"
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
