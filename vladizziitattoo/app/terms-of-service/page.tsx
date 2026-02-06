import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const TermsOfService: React.FC<Props> = ({ className }) => {
  return <div className={cn(className, "mt-32")}>TermsOfService log</div>;
};

export default TermsOfService;
