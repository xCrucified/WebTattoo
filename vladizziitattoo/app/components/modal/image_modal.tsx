/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

interface Props {
  className?: string;
  image: { id: number; imageUrl: string };
  onClose: () => void;
}

export const Image_Modal: React.FC<Props> = ({ image, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-1050 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-screen w-full flex flex-col items-center justify-center"
        onClick={handleContentClick}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white text-4xl font-light transition-colors"
        >
          &times;
        </button>

        <img
          src={image.imageUrl}
          alt={`Work ${image.id}`}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Image_Modal;
