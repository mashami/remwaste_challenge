import CardsWrapper from "@/components/Card/CardsWrapper";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="py-8 space-y-7">
      <Navbar />

      <div className="flex items-center justify-center space-y-1.5">
        <div className="flex flex-col items-center space-y-2.5">
          <h1 className="text-2xl text-white font-bold">
            Choose Your Skip Size
          </h1>

          <p className="text-white/75 font-medium text-[18px]">
            Select the skip size that best suits your needs
          </p>
        </div>
      </div>

      <div className="pt-5">
        <CardsWrapper />
      </div>
    </div>
  );
}
