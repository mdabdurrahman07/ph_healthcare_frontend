import Logo from "@/assests/svg/logo";
import DoctorApplyForm from "@/components/form/DoctorApplyForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ApplyPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-3">
      <div className="flex flex-col col-span-2 gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center gap-2">
              <Logo />
              <span>PH Healthcare</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl">
            <DoctorApplyForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/login.jpg"
          alt="PH HealthCare Login Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          fill
          loading="eager"
        />
      </div>
    </div>
  );
};

export default ApplyPage;
