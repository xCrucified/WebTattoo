/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardImage from "../card_img/card";



interface GalleryImage {
  id: number;
  imageUrl: string;
}

interface CyclingGalleryProps {
  images: GalleryImage[]; 
  className?: string;
}

const getPaddedPool = (pool: GalleryImage[]): GalleryImage[] => {
  if (pool.length >= 5) return pool;
  if (pool.length === 0) return [];

  const padded: GalleryImage[] = [];
  let i = 0;
  while (padded.length < 5) {
    const original = pool[i % pool.length];
    padded.push({
      ...original,
      // Generate a virtual ID to ensure key uniqueness
      id: original.id + Math.floor(padded.length / pool.length) * 1000000,
    });
    i++;
  }
  return padded;
};

const getNextImages = (current: GalleryImage[], pool: GalleryImage[]): GalleryImage[] => {
  const targetSize = 5;
  const paddedPool = getPaddedPool(pool);

  if (paddedPool.length === 0) return [];

  const isValid = (candidate: GalleryImage[]) => {
    for (let i = 0; i < candidate.length; i++) {
      if (current[i] && candidate[i].id === current[i].id) {
        return false;
      }
    }
    return true;
  };

  if (paddedPool.length === targetSize) {
    let attempts = 0;
    const candidate = [...paddedPool];
    
    while (attempts < 100) {
      for (let i = candidate.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidate[i], candidate[j]] = [candidate[j], candidate[i]];
      }
      if (isValid(candidate)) {
        return candidate;
      }
      attempts++;
    }
    return candidate;
  }

  let attempts = 0;
  while (attempts < 200) {
    const candidate: GalleryImage[] = [];
    const usedIds = new Set<number>();
    let valid = true;

    for (let i = 0; i < targetSize; i++) {
      const currentIdAtSlot = current[i]?.id;
      // Filter choices: must not be already used in this cycle, and must not be same as previous slot
      const choices = paddedPool.filter(
        (img) => !usedIds.has(img.id) && img.id !== currentIdAtSlot
      );

      if (choices.length === 0) {
        valid = false; // Dead end encountered, break and retry
        break;
      }

      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      candidate.push(randomChoice);
      usedIds.add(randomChoice.id);
    }

    if (valid && candidate.length === targetSize) {
      return candidate;
    }
    attempts++;
  }

  return paddedPool.slice(0, targetSize);
};

export default function CyclingGallery({ images }: CyclingGalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="flex h-48 w-full items-center justify-center rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
        <p className="text-sm text-gray-500">No images available in the gallery.</p>
      </div>
    );
  }

  const [currentImages, setCurrentImages] = useState<GalleryImage[]>(() => {
    return getPaddedPool(images).slice(0, 5);
  });

  const imagesRef = useRef(images);
  useEffect(() => {
    imagesRef.current = images;
    setCurrentImages(getPaddedPool(images).slice(0, 5));
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => getNextImages(prev, imagesRef.current));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"relative w-full overflow-hidden mt-10"}>
      {/* 5 columns side-by-side with responsive spacing */}
      <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-5 w-[90%] m-auto">
        <AnimatePresence mode="popLayout" initial={false}>
          {currentImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              layoutId={String(image.id)}
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -15 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 26,
              }}
              className="relative aspect-3/4 w-full overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-lg"
            >
              <CardImage src={image.imageUrl} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}