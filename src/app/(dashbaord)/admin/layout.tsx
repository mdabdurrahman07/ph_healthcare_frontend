import RoleGuard from "@/components/auth/RoleGuard";
import React, { ReactNode } from "react";

const adminLayout = ({ children }: { children: ReactNode }) => {
  return <RoleGuard roles={["ADMIN", "SUPER_ADMIN"]}>{children}</RoleGuard>;
};

export default adminLayout;
