import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";
import { getToken } from "@/utils/account";

const PublicRoute = () => {
  // const { isAuthenticated } = useAuth();

  if (getToken()) {
    return <Navigate to={`/`} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
