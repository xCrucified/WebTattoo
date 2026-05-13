"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

interface Props {
  date: string | null;
  className?: string;
  onClose?: () => void;
}

export const ConfirmationModal: React.FC<Props> = ({
  className,
  date,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  const parsedDate = date ? new Date(date) : null;

  const isValidDate =
    parsedDate && !isNaN(parsedDate.getTime());

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-50 flex min-h-screen min-w-screen items-center justify-center bg-black/40 backdrop-blur-sm",
        className
      )}
    >
      <div
        className="
          relative flex h-[40%] w-[60%]
          items-center justify-center
          rounded-2xl bg-gray-800/90 p-8
        "
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl"
        >
          ×
        </button>

        {isValidDate ? (
          <p className="text-xl text-white">
            You have claimed the date:{" "}
            {parsedDate.toLocaleDateString()}
          </p>
        ) : (
          <p>No valid date selected.</p>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ConfirmationModal;