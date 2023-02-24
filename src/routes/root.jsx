import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/modules/home/features/homePage";
import BigSpinner from "@/components/bigSpinner/bigSpinner";
import ErrorPage from "@/components/errorPage/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users",
        element: <Contact />,
      },
    ],
  },
]);

export default function RootRoutes() {
  return <RouterProvider router={router} fallbackElement={<BigSpinner />} />;
}
