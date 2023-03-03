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
  {
    key: "users",
    path: `/users`,
    component: React.lazy(() => import("@/modules/users/features/listUser")),
  },
  {
    key: "addUser",
    path: `/users/add`,
    component: React.lazy(() => import("@/modules/users/features/addUser")),
  },
  {
    key: "editUser",
    path: `/users/:userId`,
    component: React.lazy(() => import("@/modules/users/features/editUser")),
  },
];
