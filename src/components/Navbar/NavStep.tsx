import { cn } from "@/lib/utils";
import React from "react";

interface NavStep {
  svg?: React.ReactNode;
  title: string;
  className?: string;
}

const NavStep = ({ svg, title, className }: NavStep) => {
  return (
    <div className={cn("flex space-x-[3px] items-center", className)}>
      <div>{svg}</div>
      <p className="text-[16px] font-medium text-white">{title}</p>
    </div>
  );
};

export default NavStep;
