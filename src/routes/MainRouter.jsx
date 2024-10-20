import { DashboardRoutes } from "./DashboardRoutes";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { useAuthStore } from "@/stores/useAuthStore";

export const MainRouter = () => {
  const status = useAuthStore((state) => state.status);

  return (
    <Routes>
      {status === "authenticated" ? (
        <>
          <Route path="/*" element={<DashboardRoutes />} />
          <Route path="/auth/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      )}
    </Routes>
  );
};