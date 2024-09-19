import { DashboardLayout } from "@/layout/DashboardLayout";
import { PersonnelPage,SuppliersPage,HomePage,KardexPage, ProductsPage } from "@/pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="personal" element={<PersonnelPage />} />
        <Route path="suppliers" element={<SuppliersPage />} />
        <Route path="kardex" element={<KardexPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};
