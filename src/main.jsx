import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import "react-tabs/style/react-tabs.css";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <div className="max-w-screen-2xl mx-auto">
            <RouterProvider router={Route} />
          </div>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
