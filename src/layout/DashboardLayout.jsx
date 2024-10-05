import { Outlet } from "react-router-dom";
import { FloatingMenu } from "@/components/common/FloatingMenu";
import { Header } from "./Header";

export const DashboardLayout = () => {
  return (
    <div className="container-dashboard-layout flex h-screen overflow-hidden">
      <FloatingMenu />
      <div className="flex-1 flex flex-col overflow-auto">
        <Header />
        <div className="p-4 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
