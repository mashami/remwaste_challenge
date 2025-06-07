/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { SkipTypes } from "@/utils/types";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps extends SkipTypes {
  selected: boolean;
}

const Card = ({
  id,
  image,
  size,
  price_before_vat,
  hire_period_days,
  selected
}: CardProps) => {
  return (
    <div
      className={cn(
        " p-6 border-[3px] border-white bg-[#F0E8E8] rounded-[8px] group min-h-32 hover:border-[#00F2FF] transition duration-300 ease-in-out cursor-pointer shadow-card",
        selected && "border-[#00F2FF]"
      )}
    >
      <div className="relative h-52 w-full rounded-[8px] overflow-hidden">
        <div className="bg-[#00F2FF]/80 px-3 py-1 rounded-[14px] text-[16px] font-bold text-white absolute top-2.5 right-2 z-50">
          {size} Yards
        </div>
        <Image
          alt="Image"
          fill
          style={{
            objectFit: "cover"
          }}
          src={image}
          className="absolute w-full z-20 bg-white text-sm font-medium shadow-md group-hover:scale-105 transition ease-in-out duration-300"
        />
      </div>

      <div className="pt-5 space-y-2">
        <h1 className="text-black font-extrabold text-[20px]">
          {size} Yard Skip
        </h1>
        <p>{hire_period_days} days hire period</p>
      </div>

      <div className="pt-6 space-y-4">
        <h1 className="text-[#05beb2] text-3xl font-bold">
          £{price_before_vat}
        </h1>

        <AnimatePresence mode="wait">
          {selected ? (
            <motion.button
              key="selected"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full bg-[#00F2FF] shadow-2xl hover:bg-[#00F2FF]/75 transition duration-300 ease-in-out text-white py-3 text-[16px] font-bold cursor-pointer flex items-center justify-center space-x-1.5 rounded-md"
            >
              <p>Selected</p>
            </motion.button>
          ) : (
            <motion.button
              key="unselected"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full bg-white transition duration-300 ease-in-out text-black py-3 text-[16px] font-bold cursor-pointer flex items-center justify-center space-x-1.5 hover:bg-white/60 rounded-md"
            >
              <p>Select This Skip</p>
              <ArrowRight />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Card;
