import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Resources from "./pages/Resources";
import { IconClassContextProvider } from "./contexts/IconClassContext";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import { ResponsiveContextProvider } from "./contexts/ResponsiveContext";

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
    <WindowSizeContextProvider>
      <ResponsiveContextProvider>
        <IconClassContextProvider>
          <RouterProvider router={router} />
        </IconClassContextProvider>
      </ResponsiveContextProvider>
    </WindowSizeContextProvider>
  </React.StrictMode>
);
