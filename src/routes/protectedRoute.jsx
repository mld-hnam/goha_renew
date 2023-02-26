import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { API_BASE_URL } from "@/configs/appConfig";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={`${API_BASE_URL}/login`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
