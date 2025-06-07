"use client";

import CardsWrapper from "@/components/Card/CardsWrapper";
import { Navbar } from "@/components/Navbar";
import { SelectesFooter } from "@/components/SelectesFooter";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/utils/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { footerOpen } = useAppContext();
  return (
    <div
      className={cn(
        "pt-8 pb-8 space-y-7 scrollbar-hide",
        footerOpen && "pb-20"
      )}
    >
      <div className="flex items-center justify-center">
        <Navbar />
      </div>

      <div className="flex items-center justify-center space-y-1.5">
        <div className="flex flex-col items-center space-y-2.5">
          <h1 className="text-2xl text-white text-center font-bold">
            Choose Your Skip Size
          </h1>

          <p className="text-white/75 font-medium text-center text-[18px]">
            Select the skip size that best suits your needs
          </p>
        </div>
      </div>

      <div className="pt-5">
        <CardsWrapper />
      </div>
      <AnimatePresence>
        {footerOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed -bottom-1 left-0 right-0 bg-black  border-t border-white/80 z-[1000]"
          >
            <SelectesFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
