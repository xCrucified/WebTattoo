"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
interface Props {
  className?: string;
}

export const PrivacyPolicy: React.FC<Props> = ({ className }) => {
  const [isSmall, setIsSmall] = React.useState(false);

  React.useEffect(() => {
    const checkSize = () => setIsSmall(window.innerWidth < 920);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
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
    <div className={cn(className, "flex mt-50 gap-5 w-full h-full")}>
      <Button className="absolute left-[4%]" onClick={() => (location.href = ".")}><Image src={"/icons/left.svg"} alt={""} width={24} height={24}></Image></Button>
      <div
        className={cn(
          "flex flex-col gap-10 mx-auto w-[70%] text-pretty",
          !isSmall && "text-center",
        )}
      >
        <div className={isSmall ? "flex items-center gap-4 justify-start" : `flex gap-4 justify-center items-center mt-40`}>
          <div
            className="
              w-3 h-3 rounded-full bg-white animate-glow
              shadow-[0_0_10px_rgba(255,255,255,0.9)]
              "
          />
          <h1 className={`${!isSmall && "text-5xl"} text-4xl font-light`}>
            Privacy Policy
          </h1>
        </div>

        {!isSmall && <hr className="w-full border-white/30" />}

        <div className="flex gap-5">
          {isSmall && <div className="w-px bg-white/30 self-stretch" />}

          <div
            className={cn(
              "text-pretty text-gray-400 space-y-2",
              isSmall && "text-lg",
            )}
          >
            {sentences.map((sentence, index) => (
              <p key={index}>{sentence.trim()}.</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
