'use client';
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export const PrivacyPolicy: React.FC<Props> = ({ className }) => {
  const [isSmall, isSmallWindow] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      isSmallWindow(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const text = `We respect your privacy. Any personal information you provide through
  this website, such as your name, email address, phone number, social
  media contact, or booking details, is used only to respond to your
  inquiries, schedule and manage appointments, prepare tattoo designs,
  and improve our services. We do not sell, rent, or share your personal
  data with third parties, except when required by law or when necessary
  to operate this website (for example, secure hosting or appointment
  tools). Your information is stored securely and retained only for as
  long as necessary to provide our services and meet legal or business
  requirements. You have the right to request access to your personal
  data, ask for corrections, or request deletion at any time by
  contacting us. This website may use cookies or basic analytics tools
  to understand how visitors use the site and to improve user
  experience. By using this website, you agree to the collection and use
  of your information as described in this policy.`;

  const sentences = text.split(".").filter((s) => s.trim() !== "");

  return (
    <div className={cn(className, "flex mt-80 gap-5 w-full h-full")}>
      {isSmall && ( <hr className="ml-6 h-[41rem] border-0 border-l border-white/30" />)}
      <div className="flex flex-col gap-10 sm:mx-auto sm:w-[50%] w-[70%] text-pretty sm:text-center">
        <h1 className="sm:text-5xl text-4xl font-light">Privacy Policy</h1>
        <div className="sm:text-xl text-pretty text-gray-400 space-y-2">
          {sentences.map((sentence, index) => (
            <p key={index}>{sentence.trim()}.</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
