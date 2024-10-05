import { useStats } from "@/hooks/useStats";
import { StatCard } from "./StatCard";

export const CategoryStats = () => {
  const stats = useStats();
  return (
    <div className=" flex flex-wrap w-full justify-around gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          count={stat.count}
          Icon={stat.icon}
        />
      ))}
    </div>
  );
};
