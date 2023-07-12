import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Resources from "./pages/Resources";
import { IconClassContextProvider } from "./contexts/IconClassContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/recursos",
    element: <Resources />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IconClassContextProvider>
      <RouterProvider router={router} />
    </IconClassContextProvider>
  </React.StrictMode>
);
