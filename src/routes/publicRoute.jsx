import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { API_BASE_URL } from "../configs/appConfig";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={`${API_BASE_URL}/`} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
