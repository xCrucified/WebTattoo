"use client";

import React, { useEffect, useState } from "react";
import { Calendar } from "./calendar";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";
import ClaimModal from "../modal/claim_date";

interface Props {
  className?: string;
  onClose: () => void;
}

export const SignUp_Modal: React.FC<Props> = ({ className }) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  return (
    <Card
      className={cn(
        "absolute opacity-60 top-25 right-0 bg-black border-0",
        className,
      )}
    >
      <CardContent className="p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          showWeekNumber
          showOutsideDays={false}
          disabled={{
            before: new Date(),
            after: new Date(new Date().setMonth(new Date().getMonth() + 3)),
          }}
        />
        <button
          disabled={!date?.getDate()}
          className="cursor-pointer disabled:cursor-not-allowed"
          onClick={() => {
            if (!date) return;
            const formatted = date.toLocaleDateString("sv-SE");

            setSelectedDate(formatted);
            setIsOpen(true);
          }}
        >
          Claim
        </button>
        {isOpen && <ClaimModal className="" onClose={() => setIsOpen(false)} date={selectedDate} />}
      </CardContent>
    </Card>
  );
};

export default SignUp_Modal;
