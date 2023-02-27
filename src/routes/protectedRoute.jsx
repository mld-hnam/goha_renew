import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) {
    return (
      <Navigate to={`/auth/login?redirect=${location.pathname}`} replace />
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
