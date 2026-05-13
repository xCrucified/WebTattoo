"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

interface Props {
  date: string | null;
  className?: string;
  onClose?: () => void;
}

export const ClaimModal: React.FC<Props> = ({ className, date, onClose }) => {
   useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  const parsedDate = date ? new Date(date) : null;

  const isValidDate = parsedDate && !isNaN(parsedDate.getTime());
  return createPortal(
    <div
      className={cn(
        "fixed flex items-center justify-center overscroll-y-none backdrop-blur-xs min-w-screen min-h-screen bg-black/20 inset-0 z-99999 overflow-y-hidden",
        className,
      )}
    >
      <div
        className="w-[60%] h-[40%] 
                   flex items-center justify-around bg-gray-800/90 
                   overflow-y-auto outline"
      >

        {isValidDate ? (
          <p className="outline">You have claimed the date: {parsedDate.toLocaleDateString()}</p>
        ) : (
          <p>No valid date selected.</p>
        )}
        <button onClick={onClose} className="outline">
          X
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default ClaimModal;
