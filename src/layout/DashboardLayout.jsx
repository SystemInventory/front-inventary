import { Outlet } from "react-router-dom";
import { FloatingMenu } from "@/components/FloatingMenu.jsx/FloatingMenu";
import { Header } from "./Header";

export const DashboardLayout = () => {
  return (
    <div className="container-dashboard-layout flex">
      <FloatingMenu />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
