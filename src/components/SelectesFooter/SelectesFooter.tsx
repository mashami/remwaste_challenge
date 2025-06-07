"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useAppContext } from "@/utils/context/AppContext";
import { useScreens } from "@/hooks/useScreens";
import { cn } from "@/lib/utils";

const SelectedFooter = () => {
  const { selectedSkip, setSelectedSkipId, setFooterOpen } = useAppContext();
  const responsive = useScreens();

  const handleBackClicked = () => {
    setSelectedSkipId(undefined);
    setFooterOpen(false);
  };
  return (
    <div className={cn(" 2xl:px-12 md:px-8 sm:px-2 bg-black")}>
      <div className={cn("py-4 space-y-4")}>
        <p className="text-xs text-gray-400 text-center leading-snug">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification. Colours may vary. Options
          and/or accessories may be featured at additional cost.
        </p>

        <div
          className={cn(
            "flex flex-col md:flex-row items-center justify-between gap-4"
          )}
        >
          <div className="flex flex-wrap items-center gap-x-3 text-center md:text-left">
            <p className="font-medium text-white/75">
              {selectedSkip?.size} Yard Skip
            </p>
            <p className="text-[#05beb2] text-2xl font-bold">
              £{selectedSkip?.price_before_vat}
            </p>
            <p className="font-medium text-white/75">
              {selectedSkip?.hire_period_days} day hire
            </p>
          </div>

          <div
            className={cn(
              "flex  gap-3",
              responsive.isLaptop && "justify-end",
              responsive.isMobile && "justify-center"
            )}
          >
            <Button
              onClick={handleBackClicked}
              className={cn(
                "bg-white text-black px-6 py-3 font-bold hover:bg-white/70 transition duration-300 ease-in-out rounded-md cursor-pointer w-fit",
                responsive.isMobile && "w-40 left-3"
              )}
            >
              <p>Back</p>
            </Button>

            <Button
              className={cn(
                "bg-[#00F2FF]/70 text-white px-6 py-3 font-bold hover:bg-[#00e6f6] transition duration-300 ease-in-out rounded-md cursor-pointer w-fit",
                responsive.isMobile && "w-40 right-3"
              )}
            >
              <p>Continue</p>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedFooter;
