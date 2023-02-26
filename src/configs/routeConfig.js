import React from "react";
import { API_BASE_URL } from "@/configs/appConfig";

export const publicRoutes = [
  {
    key: "login",
    path: `${API_BASE_URL}/login`,
    component: React.lazy(() => import("@/modules/auth/features/login")),
  },
  {
    key: "tracking",
    path: `${API_BASE_URL}/tracking`,
    component: React.lazy(() => import("@/modules/tracking/features/tracking")),
  },
];
/**
 * Protected routes
 */
export const protectedRoutes = [
  {
    key: "dashboard",
    path: `${API_BASE_URL}/dashboard`,
    component: React.lazy(() =>
      import("@/modules/dashboard/features/dashboard")
    ),
  },
];
