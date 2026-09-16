import RoleGuard from "@/components/auth/RoleGuard";
import DashboardShell from "@/components/dashboard/DashboardShell";
import React, { ReactNode } from "react";

const adminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RoleGuard roles={["DOCTOR"]}>
      <DashboardShell role="DOCTOR">{children}</DashboardShell>
    </RoleGuard>
  );
};

export default adminLayout;
