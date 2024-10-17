
import { DashboardRoutes } from "./DashboardRoutes";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthRoutes } from "./AuthRoutes";
export const MainRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("authToken")
  );

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<Navigate to="/auth" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<DashboardRoutes />} />
          </>
        )}
      </Routes>
    </>
  );
};
