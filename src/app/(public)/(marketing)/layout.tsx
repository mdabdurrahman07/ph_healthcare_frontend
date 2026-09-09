import Footer from "@/components/layouts/public/Footer";
import Header from "@/components/layouts/public/Header";
import React, { ReactNode } from "react";

const publicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default publicLayout;
