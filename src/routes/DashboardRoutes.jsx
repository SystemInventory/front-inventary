import { DashboardLayout } from "@/layout/DashboardLayout";
import { Route, Routes } from "react-router-dom";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
      </Routes>
    </Routes>
  );
};
