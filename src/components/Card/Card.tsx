/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { SkipTypes } from "@/utils/types";

const Card = ({
  id,
  image,
  size,
  price_before_vat,
  hire_period_days
}: SkipTypes) => {
  return (
    <div className="p-6 border-[3px] border-white bg-[#F0E8E8] rounded-[8px] group min-h-32 hover:border-[#00F2FF] transition duration-300 ease-in-out cursor-pointer">
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

        <Button className="w-full bg-white text-black py-5 text-[16px] font-bold flex items-center space-x-1.5 hover:bg-white/60 cursor-pointer transition duration-300 ease-in-out">
          <p>Select This Skip</p>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Card;
