import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CarouselText from '../ui/carouselFunc';
interface Props {
  className?: string;
}

export const AdCarousel: React.FC<Props> = ({className }) => {
    const elements = [
      "Tatooruffka",
      "Tatooruffka",
      "Tatooruffka",
      "Tatooruffka",
      "Tatooruffka",
      "Tatooruffka"
    ];
  return (
    <section className={cn("w-full py-1 overflow-hidden bg-black", className)}>
            <CarouselText baseVelocity={5}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-10 pr-10 text-white">
                {elements.map((text, index) => (
                  <div key={index} className="flex-shrink-0 px-8">
                    <p className="text-lg">{text}</p>
                  </div>
                ))}
              </motion.div>
            </CarouselText>
          </section>
  );
};

export default AdCarousel;