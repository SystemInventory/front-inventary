import { Route, Routes } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";

export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
};
