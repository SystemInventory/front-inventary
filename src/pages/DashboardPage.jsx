import { CategoryStats } from "@/components/Home/CategoryStats";
import { InventoryStats } from "@/components/Home/InventoryStats";

export const DashboardPage = () => {
  return (
    <div className=" h-full gap-2 flex flex-col">
      <div className="flex flex-wrap">
        <CategoryStats />
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto">
        <InventoryStats />
      </div>
    </div>
  );
};