import { DashboardLayout } from "@/layout/DashboardLayout";
import {PersonnelPage, SuppliersPage, KardexPage, ProductsPage, CategoryPage, DashboardPage} from "@/pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<DashboardPage />} />
        <Route path="personal" element={<PersonnelPage />} />
        <Route path="suppliers" element={<SuppliersPage />} />
        <Route path="kardex" element={<KardexPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="categories" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
};
