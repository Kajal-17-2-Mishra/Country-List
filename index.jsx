import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
