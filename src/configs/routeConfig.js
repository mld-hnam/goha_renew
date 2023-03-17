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
    path: `/users/edit/:userId`,
    component: React.lazy(() => import("@/modules/users/features/editUser")),
  },
  {
    key: "agency",
    path: `/users/agency`,
    component: React.lazy(() => import("@/modules/users/features/agency")),
  },
  //
  {
    key: "orders",
    path: `/orders`,
    component: React.lazy(() => import("@/modules/order/features/listOrder")),
  },
  {
    key: "addOrder",
    path: `/orders/add`,
    component: React.lazy(() => import("@/modules/order/features/addOrder")),
  },
  {
    key: "editOrder",
    path: `/orders/edit/:orderId`,
    component: React.lazy(() => import("@/modules/order/features/editOrder")),
  },
  //
  {
    key: "listCustomer",
    path: `/customers`,
    component: React.lazy(() =>
      import("@/modules/customer/features/listCustomer")
    ),
  },
  {
    key: "addCustomer",
    path: `/customers/add`,
    component: React.lazy(() =>
      import("@/modules/customer/features/addCustomer")
    ),
  },
  {
    key: "editCustomer",
    path: `/customers/edit/:customerId`,
    component: React.lazy(() =>
      import("@/modules/customer/features/editCustomer")
    ),
  },
  //
  {
    key: "flights",
    path: `/flights`,
    component: React.lazy(() => import("@/modules/flight/features/listFlight")),
  },
  {
    key: "addFlight",
    path: `/flights/add`,
    component: React.lazy(() => import("@/modules/flight/features/addFlight")),
  },
  {
    key: "editFlight",
    path: `/flights/edit/:flightId`,
    component: React.lazy(() => import("@/modules/flight/features/editFlight")),
  },
];
