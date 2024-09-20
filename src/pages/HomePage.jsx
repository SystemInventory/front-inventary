import { CategoryStats } from "@/components/Home/CategoryStats";
import { InventoryStats } from "@/components/Home/InventoryStats";
import { UpcomingExpirations } from "@/components/Home/UpcomingExpirations";

export const HomePage = () => {
  return (
    <div className="gap-32 max-sm:gap-9 sm:gap-9 md:gap-20 flex mx-auto justify-center flex-wrap">
      <CategoryStats />
      <div className="flex flex-col gap-4 items-center w-full md:w-[40%]">
        <InventoryStats />
        <UpcomingExpirations />
      </div>
    </div>
  );
};
