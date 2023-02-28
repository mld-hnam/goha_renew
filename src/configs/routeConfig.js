import React from "react";

export const publicRoutes = [
  {
    key: "login",
    path: `/login`,
    component: React.lazy(() => import("@/modules/auth/features/login")),
  },
  // {
  //   key: "tracking",
  //   path: `/tracking`,
  //   component: React.lazy(() => import("@/modules/tracking/features/tracking")),
  // },
];
/**
 * Protected routes
 */
export const protectedRoutes = [
  {
    key: "dashboard",
    path: `/dashboard`,
    component: React.lazy(() =>
      import("@/modules/dashboard/features/dashboard")
    ),
  },
];
