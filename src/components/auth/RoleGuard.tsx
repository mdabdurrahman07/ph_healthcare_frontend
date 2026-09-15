"use client"
import React, { ReactNode, useEffect } from 'react';
import AuthLoading from './AuthLoading';
import { useGetMe } from '@/hooks/auth';
import { useRouter } from 'next/navigation';
import { UserRole } from '@/types/roles/user.types';
import AccessDenied from './AccessDenied';

interface IProps {
  children: ReactNode;
  roles: UserRole[];
}

const RoleGuard = ({ children, roles }: IProps) => {
     const router = useRouter();

  const { data, isPending, isError } = useGetMe();

  const user = data?.data;

  const isAuthorized = !!user && roles.includes(user.role);

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

  if (isAuthorized) {
    return <>{children}</>;
  }

  return <AccessDenied />;
};

export default RoleGuard;