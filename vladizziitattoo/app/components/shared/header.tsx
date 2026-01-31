'use client';

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    const handleResize = () => {
      if (window.innerWidth >= 1280/* px */) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, setIsOpen]);

  return (
    <header
      className={cn(className, "w-[100%] shadow-md h-[100px] bg-[#0000005c]")}
    >
      <div className="flex items-center justify-between mx-auto h-full w-[95%]">
        <a
          href="#home"
          className="flex items-center space-x-3 nav-item w-full h-full"
        >
          <Image
            src="/header_img/rose.svg"
            alt="Vladizzi Tattoo Logo"
            className="text-logo"
            width={45}
            height={45}
          />
          <h1 className="text-2xl font-bold text-logo">Vladizzii Tattoo</h1>
        </a>

        {
          <nav
            className={`
        ${isOpen ? "flex" : "hidden"}
xl:flex xl:relative xl:display-none hidden xl:bg-transparent 
absolute 
left-0 w-full 
bg-[#121212] 
flex-col lg:flex-row 
text-[#acacad] text-xl z-40
h-[100%] 
`}
          >
            <ul className="flex justify-around w-full h-full">
              <li className="flex-1 flex w-32 flex-shrink-0 text-center nav-item">
                <a
                  href="#home"
                  className="flex items-center justify-center w-full h-ful"
                >
                  <p>Home</p>
                </a>
              </li>

              <li className="flex-1 flex w-32 flex-shrink-0 text-center nav-item">
                <a
                  href="#gallery"
                  className="flex items-center justify-center w-[100%] h-[100%]"
                >
                  <p>Gallery</p>
                </a>
              </li>

              <li className="flex-1 flex w-32 flex-shrink-0 text-center nav-item">
                <a
                  href="#about"
                  className="flex items-center justify-center w-full h-full"
                >
                  <p>About</p>
                </a>
              </li>

              <li className="flex-1 flex w-32 flex-shrink-0 text-center nav-item">
                <a
                  href="#review"
                  className="flex items-center justify-center w-full h-full"
                >
                  Testimonials
                </a>
              </li>
              <li className="flex flex-1 items-center justify-center ml-5">
                <a
                  href="#register"
                  className="border-[#2a2a2a] bg-[#1212127f] w-[10rem] rounded-3xl border-[1px] px-4 py-2 hover:border-[#4b4b4b] duration-300"
                >
                  <span className="flex items-center justify-center gap-1 shown-text-btn">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M9.60966 5.86016C8.24522 6.40538 7.563 6.67798 7.48069 7.24324C7.39837 7.80849 7.97047 8.29204 9.11468 9.25915L9.4107 9.50935C9.73584 9.78417 9.89842 9.92158 9.99161 10.1089C10.0848 10.2962 10.0981 10.5121 10.1246 10.9441L10.1488 11.3373C10.2421 12.8574 10.2888 13.6174 10.7828 13.8794C11.2768 14.1414 11.8909 13.7319 13.1191 12.9129L13.4368 12.701C13.7858 12.4683 13.9603 12.3519 14.1599 12.32C14.3595 12.288 14.5616 12.344 14.9657 12.456L15.3336 12.558C16.7558 12.9522 17.4669 13.1493 17.8545 12.746C18.2421 12.3427 18.0495 11.6061 17.6644 10.1328M17.999 7.83522C18.7845 6.55883 19.1773 5.92063 18.9229 5.40935C18.6685 4.89806 17.9354 4.85229 16.4691 4.76076L16.0898 4.73708C15.6731 4.71107 15.4648 4.69807 15.2839 4.60208C15.1029 4.5061 14.9698 4.338 14.7037 4.00181L14.4614 3.69574C13.5247 2.51266 13.0564 1.92112 12.5115 2.00845C11.9667 2.09577 11.7062 2.80412 11.1851 4.22083"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        <path
                          d="M7.44645 7.24121C5.11144 8.94915 3.32371 12.2158 4.24844 18.0004C5.06701 15.5892 7.53446 13.6579 10.2908 12.7283"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M10.2808 16C10.2808 16 10.9135 17.3908 11.6935 17.8692C12.4735 18.3475 14 18.2808 14 18.2808C14 18.2808 12.6092 18.9135 12.1308 19.6935C11.6525 20.4735 11.7192 22 11.7192 22C11.7192 22 11.0865 20.6092 10.3065 20.1308C9.52652 19.6525 8 19.7192 8 19.7192C8 19.7192 9.39082 19.0865 9.86916 18.3065C10.3475 17.5265 10.2808 16 10.2808 16Z"
                          stroke="currentColor"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M18.4795 15C18.4795 15 18.0577 15.9272 17.5377 16.2461C17.0177 16.565 16 16.5205 16 16.5205C16 16.5205 16.9272 16.9423 17.2461 17.4623C17.565 17.9823 17.5205 19 17.5205 19C17.5205 19 17.9423 18.0728 18.4623 17.7539C18.9823 17.435 20 17.4795 20 17.4795C20 17.4795 19.0728 17.0577 18.7539 16.5377C18.435 16.0177 18.4795 15 18.4795 15Z"
                          stroke="currentColor"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
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
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "34%", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 z-50 mt-[6rem] flex flex-col items-center justify-start bg-black text-white xl:hidden overflow-hidden"
            >
              <div
                className={`
    fixed inset-x-0 top-0 z-50 mt-[6rem] bg-black text-white xl:hidden 
    grid transition-[grid-template-rows,opacity,visibility] duration-500 ease-in-out
    ${isOpen ? "grid-rows-[1fr] opacity-100 visible" : "grid-rows-[0fr] opacity-0 invisible"}
  `}
              >
                <div className="overflow-hidden">
                  <nav className="flex flex-col items-center py-8 w-full">
                    <ul className="flex flex-col items-center gap-6 w-full text-2xl font-medium ml-18">
                      {/* Home */}
                      <li className="w-full">
                        <a
                          href="#home"
                          className="block py-3 hover:text-gray-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Home
                        </a>
                      </li>

                      {/* Gallery */}
                      <li className="w-full">
                        <a
                          href="#gallery"
                          className="block py-3 hover:text-gray-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Gallery
                        </a>
                      </li>

                      {/* About */}
                      <li className="w-full">
                        <a
                          href="#about"
                          className="block py-3 hover:text-gray-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          About
                        </a>
                      </li>

                      {/* Testimonials */}
                      <li className="w-full">
                        <a
                          href="#review"
                          className="block py-3 hover:text-gray-400 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Testimonials
                        </a>
                      </li>

                      {/* Btn Check In */}
                      <li className="self-start w-[14rem]">
                        <a
                          href="#register"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-center gap-2 border-[#2a2a2a] bg-[#1212127f] rounded-3xl border-[1px] px-8 py-3 hover:border-[#4b4b4b] transition-all duration-300 active:scale-95"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white"
                          >
                            <path
                              d="M9.60966 5.86016C8.24522 6.40538 7.563 6.67798 7.48069 7.24324C7.39837 7.80849 7.97047 8.29204 9.11468 9.25915L9.4107 9.50935C9.73584 9.78417 9.89842 9.92158 9.99161 10.1089C10.0848 10.2962 10.0981 10.5121 10.1246 10.9441L10.1488 11.3373C10.2421 12.8574 10.2888 13.6174 10.7828 13.8794C11.2768 14.1414 11.8909 13.7319 13.1191 12.9129L13.4368 12.701C13.7858 12.4683 13.9603 12.3519 14.1599 12.32C14.3595 12.288 14.5616 12.344 14.9657 12.456L15.3336 12.558C16.7558 12.9522 17.4669 13.1493 17.8545 12.746C18.2421 12.3427 18.0495 11.6061 17.6644 10.1328M17.999 7.83522C18.7845 6.55883 19.1773 5.92063 18.9229 5.40935C18.6685 4.89806 17.9354 4.85229 16.4691 4.76076L16.0898 4.73708C15.6731 4.71107 15.4648 4.69807 15.2839 4.60208C15.1029 4.5061 14.9698 4.338 14.7037 4.00181L14.4614 3.69574C13.5247 2.51266 13.0564 1.92112 12.5115 2.00845C11.9667 2.09577 11.7062 2.80412 11.1851 4.22083"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7.44645 7.24121C5.11144 8.94915 3.32371 12.2158 4.24844 18.0004C5.06701 15.5892 7.53446 13.6579 10.2908 12.7283"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
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