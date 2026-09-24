import React, { ReactNode } from "react";
import AuthGuard from "@/components/auth/AuthGuard";

const globalLayout = ({ children }: { children: ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default globalLayout;
