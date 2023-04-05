import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";
import { getToken } from "@/utils/account";

const ProtectedRoute = () => {
  // const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!getToken()) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
