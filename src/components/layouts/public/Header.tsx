"use client";
import Logo from "@/assests/svg/logo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks/auth";
import { UserRole } from "@/types/roles/user.types";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const routes = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  // {name: "Home", url: "/"},
  // {name: "Home", url: "/"},
];

const dashboardRoute: Record<UserRole, string> = {
  SUPER_ADMIN: "/admin",
  ADMIN: "/admin",
  DOCTOR: "/doctor",
  PATIENT: "/patient",
};

const Header = () => {
  const { data, isLoading } = useGetMe();
  const { mutate: logout } = useLogout();
  const queryClient = useQueryClient();
  const role: UserRole = !!data?.data && data?.data.role;
  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.add({
          title: "logout successfully",
          description: "something went wrong",
          type: "success",
        });
        queryClient.removeQueries({ queryKey: ["user"] });
      },
      onError: () => {
        toast.add({
          title: "logout failed",
          description: "logged out failed",
          type: "error",
        });
      },
    });
  };
  return (
    <header className="w-full h-16 border border-b">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Logo />
          <span>PH Healthcare</span>
        </div>
        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.name} href={route.url}>
              {route.name}
            </Link>
          ))}
          {role && <Link href={dashboardRoute[role]}>Dashboard</Link>}
        </nav>
        <div>
          {!isLoading && !data && (
            <Button
              variant="outline"
              render={<Link href="/login">Login</Link>}
              nativeButton={false}
            >
              Login
            </Button>
          )}
          {!isLoading && data && (
            <Button onClick={handleLogout} variant="destructive">
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
