import { LoginPage } from "@/pages/auth/LoginPage"
import { Navigate, Route, Routes } from "react-router-dom"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
