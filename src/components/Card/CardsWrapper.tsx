"use client";
import React from "react";
import Card from "./Card";
import { skips } from "@/utils/helper";
import { useScreens } from "@/hooks/useScreens";
import { cn } from "@/lib/utils";

const CardsWrapper = () => {
  const responsive = useScreens();
  return (
    <div
      className={cn(
        "w-full grid",
        responsive.isLaptop && "grid-cols-3 gap-6",
        responsive.isMobile && "grid-cols-1 gap-6",
        responsive.isTablet && "grid-cols-2 gap-6"
      )}
    >
      {skips.map((skip) => {
        return (
          <Card
            key={skip.id}
            hire_period_days={skip.hire_period_days}
            id={skip.id}
            image={skip.image}
            price_before_vat={skip.price_before_vat}
            size={skip.size}
          />
        );
      })}
    </div>
  );
};

export default CardsWrapper;
