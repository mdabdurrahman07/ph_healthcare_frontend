"use client";
import { useGetMe } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import AuthLoading from "./AuthLoading";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { data, isPending, isError } = useGetMe();
  const user = data?.data
 useEffect(() => {
    if (isPending) {
      return;
    }
    if (isError || !user) {
      router.replace("/login");
    }
  }, [isPending, isError, user, router.replace]);

  if (isPending) {
    return <AuthLoading />;
  }

  if (isError || !user) {
    return <AuthLoading label="Redirecting..." />;
  }


  return <>{children}</>;
};

export default AuthGuard;
