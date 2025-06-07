"use client";
import Card from "./Card";
import { skips } from "@/utils/helper";
import { useScreens } from "@/hooks/useScreens";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/utils/context/AppContext";

const CardsWrapper = () => {
  const responsive = useScreens();
  const { handleSelectSkip, setFooterOpen, setSelectedSkipId, selectedSkipId } =
    useAppContext();

  const handleCardClick = (id: number) => {
    setSelectedSkipId(id);
    handleSelectSkip(id);
    setFooterOpen(true);
  };

  return (
    <div
      className={cn(
        "w-full grid gap-6",
        responsive.isLaptop && "grid-cols-3",
        responsive.isMobile && "grid-cols-1",
        responsive.isTablet && "grid-cols-2"
      )}
    >
      {skips.map((skip) => {
        return (
          <div key={skip.id} onClick={() => handleCardClick(skip.id)}>
            <Card
              hire_period_days={skip.hire_period_days}
              id={skip.id}
              image={skip.image}
              price_before_vat={skip.price_before_vat}
              size={skip.size}
              selected={selectedSkipId === skip.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsWrapper;
