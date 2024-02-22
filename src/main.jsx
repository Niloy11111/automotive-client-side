import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import { router } from "./Routes/Router";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Favicon from "react-favicon";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className=" bg-[#FAFEEC] text-[#0B0E01] dark:bg-[#191919] font-Inter min-h-screen">
    <Favicon url="https://i.ibb.co/47ZF47v/girl-with-red-vintage-convertible-car-1308-111836.jpg" />
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
