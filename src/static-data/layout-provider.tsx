"use client";
import Navbar from "@/components/navbar/navbar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./rtk-store";
import Notification from "@/components/navbar/notification";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/navbar/footer";
import CartPopup from "./cartpopup";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [readyState, setReadyState] = useState(false);
  const authRoute = [
    "/register",
    "/login",
    "/forgot-password",
    "/enter-new-password",
    "/verify-email",
  ];
  const pathName = usePathname();
  useEffect(() => {
    setReadyState(true);
  }, []);
  if (readyState) {
    return (
      <div className=" grid w-full max-w-6xl   mx-auto px-3 overflow-x-hidden xl:p-0">
        <Provider store={store}>
          {!authRoute.includes(pathName) && <Notification />}
          {!authRoute.includes(pathName) && <Navbar />}
          {children}
          {!authRoute.includes(pathName) && <CartPopup />}
          {!authRoute.includes(pathName) && <Footer />}
          <Toaster position="bottom-right" />
        </Provider>
      </div>
    );
  }
};

export default LayoutProvider;
