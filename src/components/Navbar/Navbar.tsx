import React from "react";
import NavStep from "./NavStep";
import {
  CalendarIcon,
  CarIcon,
  CheckIcon,
  CreaditCardIcon,
  DeleteIcon,
  Location
} from "../Svg";

const Navbar = () => {
  return (
    <div className="py-4 px-2 overflow-x-auto scroll-smooth touch-pan-x scrollbar-hide">
      <div className="flex items-center space-x-4 min-w-max whitespace-nowrap">
        <div className="flex items-center space-x-3.5">
          <NavStep
            title="Postcode"
            svg={<Location />}
            className="cursor-pointer"
          />
          <div className="w-12 h-px bg-[#00F2FF]/35" />
        </div>

        <div className="flex items-center space-x-3.5">
          <NavStep
            title="Waste Type"
            svg={<DeleteIcon />}
            className="cursor-pointer"
          />
          <div className="w-12 h-px bg-[#00F2FF]/35" />
        </div>

        <div className="flex items-center space-x-3.5">
          <NavStep
            title="Select Skip"
            svg={<CarIcon />}
            className="cursor-pointer"
          />
          <div className="w-12 h-px bg-white/35" />
        </div>

        <div className="flex items-center space-x-3.5 opacity-65">
          <NavStep title="Permit Check" svg={<CheckIcon />} />
          <div className="w-12 h-px bg-white/35" />
        </div>

        <div className="flex items-center space-x-3.5 opacity-65">
          <NavStep title="Choose Date" svg={<CalendarIcon />} />
          <div className="w-12 h-px bg-white/45" />
        </div>

        <div className="flex items-center space-x-3.5 opacity-65">
          <NavStep title="Payment" svg={<CreaditCardIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
