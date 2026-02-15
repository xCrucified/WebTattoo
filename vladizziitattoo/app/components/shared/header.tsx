"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RoseSVG from "@/app/misc/rose_svg";
import FallingStarSVG from "@/app/misc/falling-star_svg";
interface Props {
  className?: string;
}
interface Routes {
  name: string;
  path: string;
}

const route: Routes[] = [
  {
    name: "Home",
    path: ".",
  },
  {
    name: "Gallery",
    path: "#gallery",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Testimonials",
    path: "#testimonials",
  },
];

export const Header: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 /* px */) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, setIsOpen]);

  return (
    <header
      className={cn(
        className,
        "w-[100%] shadow-md h-[100px]",
        isOpen ? "bg-black" : "blur_drop_down",
      )}
    >
      <div className="flex items-center justify-around mx-auto h-full w-[95%]">
        <div className="flex items-center space-x-3 w-full h-full">
          <a href="." className="flex items-center nav-item space-x-1 h-full">
            <Image
              src="/header_img/rose.svg"
              alt="Vladizzi Tattoo Logo"
              className="text-logo"
              width={45}
              height={45}
            />
            <h1 className="text-2xl font-bold text-logo">Vladizzii Tattoo</h1>
          </a>
        </div>

        {
          <nav
            className={`
        ${isOpen ? "flex" : "hidden"}
xl:flex xl:relative xl:display-none hidden xl:bg-transparent 
absolute 
left-0 w-full 
bg-[#121212] 
flex-col lg:flex-row
 text-xl z-40
h-[100%] 
`}
          >
            <ul className="flex justify-around w-full h-full">
              {route.map((x) => (
                <li
                  className="flex-1 flex w-32 flex-shrink-0 text-center nav-item"
                  key={x.path}
                >
                  <a
                    className="flex items-center justify-center w-full h-full"
                    href={x.path}
                  >
                    <p className="text-lg">{x.name}</p>
                  </a>
                </li>
              ))}

              <li className="flex flex-1 items-center justify-center ml-5">
                <a
                  href="#register"
                  className="border-[#2a2a2a] bg-[#1212127f] w-[10rem] rounded-3xl border-[1px] px-4 py-2 hover:border-[#4b4b4b] duration-300"
                >
                  <span className="flex items-center justify-center gap-1">
                    <RoseSVG className="w-6 h-6" />
                    <p>Check In</p>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        }

        <button
          className="max-[1280px]:flex hidden flex-col h-8 w-8 justify-center items-center outline-none z-[60] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <Image
              src="/header_img/close.svg"
              width={26}
              height={26}
              alt="Close"
            />
          ) : (
            <Image
              src="/header_img/menu.svg"
              width={32}
              height={32}
              alt="Menu"
            />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full z-50 bg-black xl:hidden blur_drop_down"
            >
              <div
                className={`
    fixed inset-x-0 top-0 z-50 mt-[6rem] bg-black text-white xl:hidden 
    grid transition-[grid-template-rows,opacity,visibility] duration-500 ease-in-out
    ${isOpen ? "grid-rows-[1fr] opacity-100 visible" : "grid-rows-[0fr] opacity-0 invisible"}
  `}
              >
                <div className="">
                  <nav className="flex flex-col items-center py-8 w-full">
                    <ul className="flex flex-col items-center gap-6 w-full text-2xl font-medium ml-18">
                      {/* Home */}
                      {route.map((x) => (
                        <li className="w-full" key={x.path}>
                          <a
                            className="block py-3 hover:text-gray-400 transition-colors"
                            href={x.path}
                            onClick={() => setIsOpen(false)}
                          >
                            <p className="text-lg">{x.name}</p>
                          </a>
                        </li>
                      ))}

                      {/* Btn Check In */}
                      <li className="self-start w-[14rem]">
                        <a
                          href="#register"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-center gap-2 border-[#2a2a2a] bg-[#1212127f] rounded-3xl border-[1px] px-8 py-3 hover:border-[#4b4b4b] transition-all duration-300 active:scale-95"
                        >
                          <FallingStarSVG />
                          <span className="font-medium">Check In</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
