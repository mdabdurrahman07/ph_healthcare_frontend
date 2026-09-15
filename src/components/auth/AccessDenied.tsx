import { ShieldAlert } from "lucide-react";
import Link from "next/link";
import React from "react";

const AccessDenied = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex gap-3">
          <div className="bg-red-200 rounded-full p-4">
      <div>
        <ShieldAlert className="size-8 text-red-500"/>
      </div>
      <div>
        <h1 className="text-lg font-semibold">You don't have access to this page</h1>
        <p>
          Go Back to <Link href="/" className="underline">Home</Link>
        </p>
      </div>
    </div>
      </div>
    </div>
  );
};

export default AccessDenied;
