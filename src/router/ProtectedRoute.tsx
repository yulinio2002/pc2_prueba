import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";

export default function ProtectedRoute() {
  const { apiKey } = useAuth();
  if (!apiKey) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
