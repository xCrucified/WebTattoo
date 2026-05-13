"use client";

import React, { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import ConfirmationModal from "./confirmationModal";


interface Props {
  className?: string;
  onClose: () => void;
}

export const SignUp_Modal: React.FC<Props> = ({
  className,
  onClose,
}) => {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isPageOpen, setIsPageOpen] = useState(false);

  const handleClaim = () => {
    if (!date) return;

    const formatted = date.toLocaleDateString("sv-SE");

    setSelectedDate(formatted);
    setIsPageOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
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

  return (
    <>
      <Card
        className={cn(
          "absolute top-20 border-0 bg-black/90",
          className
        )}
      >
        <CardContent className="p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            showWeekNumber
            showOutsideDays={false}
            disabled={{
              before: new Date(),
              after: new Date(
                new Date().setMonth(new Date().getMonth() + 3)
              ),
            }}
          />

          <button
            disabled={!date}
            onClick={handleClaim}
            className="
              flex w-full items-center justify-center
              py-4 text-white
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            Claim
          </button>
        </CardContent>
      </Card>

      {isPageOpen && (
        <ConfirmationModal
          date={selectedDate}
          onClose={() => setIsPageOpen(false)}
        />
      )}
    </>
  );
};

export default SignUp_Modal;