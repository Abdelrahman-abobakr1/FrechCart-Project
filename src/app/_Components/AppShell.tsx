"use client";

import React from "react";
import { usePathname } from "next/navigation";
import TopBar from "@/app/_Components/TopBar";
import NavBar from "@/app/_Components/NavBar";
import Footer from "@/app/_Components/Footer";

const AUTH_ROUTES = new Set([
  "/signin",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/verify-code",
]);

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = AUTH_ROUTES.has(pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <TopBar />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
