"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import RoseSVG from "@/app/misc/rose_svg";
import FallingStarSVG from "@/app/misc/falling-star_svg";
import CarouselText from "@/app/components/ui/carouselFunc";
import AdCarousel from "./ad-carousel";

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
    <>
      <AdCarousel className="absolute z-[10] top-0" />

<header
  className={cn(
    "fixed top-0 w-full z-[50] flex flex-col items-center justify-center",
    className,
  )}
>
  <div
    className="flex relative z-[60] w-full max-w-[1440px]
      backdrop-blur-md bg-black/70 px-10 max-lg:w-[80%]
      outline outline-gray-100/15 rounded-br-4xl rounded-bl-4xl 
      h-[100px]
      items-center justify-between"
  >
          <div className="flex w-full items-center justify-between">
            <a href="." className="flex items-center nav-item h-full gap-2">
              <Image
                src="/header_img/rose.svg"
                alt="Vladizzi Tattoo Logo"
                className="text-logo"
                width={45}
                height={45}
              />
              <h1
                id="titel"
                className="text-3xl font-medium text-logo max-sm:hidden"
              >
                Vladizzii Tattoo
              </h1>
            </a>

            <div className="max-lg:flex hidden">
              <button
                className="flex-col w-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <Image
                    src="/header_img/close.svg"
                    width={32}
                    height={32}
                    alt="Close"
                  />
                ) : (
                  <Image
                    src="/header_img/menu.svg"
                    width={42}
                    height={32}
                    alt="Menu"
                  />
                )}
              </button>
            </div>
          </div>
          <div className="lg:flex hidden h-full gap-10 text-lg justify-around p-5 text-center">
            {route.map((x) => (
              <li
                className="flex flex-1 xl:w-40 w-29 nav-item outline outline-gray-100/15 rounded-full py-4 hover:bg-gray-700/15 cursor-pointer"
                key={x.path}
              >
                <a
                  className="flex items-center justify-center w-full h-full"
                  href={x.path}
                >
                  <p className="text-lg font-light">{x.name}</p>
                </a>
              </li>
            ))}
            <button
              onClick={() => {
                location.href = "/";
              }}
              className="outline bg-gray-700/15 nav-item outline-gray-100/15 p-4 rounded-full whitespace-nowrap hover:bg-gray-700/30 cursor-grab font-light"
            >
              Check In
            </button>
          </div>
        </div>
      </header>
    </>
    // <header
    //   className={cn(
    //     className,
    //     "flex justify-around items-center max-w-[100%] shadow-md h-[100px]",
    //     isOpen ? "bg-black" : "blur_drop_down",
    //   )}
    // >
    //   <div className="flex items-center h-full">
    // <a href="." className="flex items-center nav-item space-x-1 h-full">
    //   <Image
    //     src="/header_img/rose.svg"
    //     alt="Vladizzi Tattoo Logo"
    //     className="text-logo"
    //     width={45}
    //     height={45}
    //   />
    //   <h1 className="text-2xl font-medium text-logo">Vladizzii Tattoo</h1>
    // </a>
    //   </div>
    //   <div className="flex items-center h-full">
    //     {
    //       <nav
    //         className={`
    //     ${isOpen ? "flex" : "hidden"}
    //     xl:flex xl:relative xl:display-none hidden xl:bg-transparent
    //     relative top-0
    //     left-0 w-full
    //     bg-[#121212]
    //     flex-col lg:flex-row
    //     text-xl z-40
    //     h-[100%]
    //     `}
    //       >
    //         <ul className="flex justify-around h-full gap-6">
    //           {route.map((x) => (
    //             <li className="flex flex-1 flex-shrink-0 nav-item" key={x.path}>
    //               <a
    //                 className="flex items-center justify-center w-full h-full"
    //                 href={x.path}
    //               >
    //                 <p className="text-lg font-light">{x.name}</p>
    //               </a>
    //             </li>
    //           ))}

    //           <li className="flex flex-1 items-center justify-center ml-5">
    //             <a
    //               href="#register"
    //               className="border-[#2a2a2a] bg-[#1212127f] w-[10rem] rounded-3xl border-[1px] px-4 py-2 hover:border-[#4b4b4b] duration-300"
    //             >
    //               <span className="flex items-center justify-center gap-1">
    //                 <RoseSVG className="w-6 h-6" />
    //                 <p className="font-light">Check In</p>
    //               </span>
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>
    //     }

    // <button
    //   className="max-[1280px]:flex hidden flex-col h-8 w-8 justify-center items-center outline-none z-[60] cursor-pointer"
    //   onClick={() => setIsOpen(!isOpen)}
    //   aria-label="Toggle menu"
    // >
    //   {isOpen ? (
    //     <Image
    //       src="/header_img/close.svg"
    //       width={26}
    //       height={26}
    //       alt="Close"
    //     />
    //   ) : (
    //     <Image
    //       src="/header_img/menu.svg"
    //       width={32}
    //       height={32}
    //       alt="Menu"
    //     />
    //   )}
    // </button>

    //     <AnimatePresence>
    //       {isOpen && (
    //         <motion.div
    //           initial={{ y: "-100%", opacity: 0 }}
    //           animate={{ y: 0, opacity: 1 }}
    //           exit={{ y: "-100%", opacity: 0 }}
    //           transition={{ duration: 0.4, ease: "easeInOut" }}
    //           className="fixed top-0 left-0 w-full z-50 bg-black xl:hidden blur_drop_down"
    //         >
    //           <div
    //             className={`
    //                 fixed inset-x-0 top-0 z-50 mt-[6rem] bg-black text-white xl:hidden
    //                 grid transition-[grid-template-rows,opacity,visibility] duration-500 ease-in-out
    //                 ${isOpen ? "grid-rows-[1fr] opacity-100 visible" : "grid-rows-[0fr] opacity-0 invisible"}
    //               `}
    //           >
    //             <div className="">
    //               <nav className="flex flex-col items-center py-8 w-full">
    //                 <ul className="flex flex-col items-center gap-6 w-full text-2xl font-medium ml-18">
    //                   {/* Home */}
    //                   {route.map((x) => (
    //                     <li className="w-full" key={x.path}>
    //                       <a
    //                         className="block py-3 hover:text-gray-400 transition-colors"
    //                         href={x.path}
    //                         onClick={() => setIsOpen(false)}
    //                       >
    //                         <p className="text-lg">{x.name}</p>
    //                       </a>
    //                     </li>
    //                   ))}

    //                   {/* Btn Check In */}
    //                   <li className="self-start w-[14rem]">
    //                     <a
    //                       href="#register"
    //                       onClick={() => setIsOpen(false)}
    //                       className="flex items-center justify-center gap-2 border-[#2a2a2a] bg-[#1212127f] rounded-3xl border-[1px] px-8 py-3 hover:border-[#4b4b4b] transition-all duration-300 active:scale-95"
    //                     >
    //                       <FallingStarSVG />
    //                       <span className="font-medium">Check In</span>
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </nav>
    //             </div>
    //           </div>
    //         </motion.div>
    //       )}
    //     </AnimatePresence>
    //   </div>
    // </header>
  );
};

export default Header;

// ! x     m        x  !
// 3 7 11 15 22 29 37 44
// mid = [0+7/2] = 3
