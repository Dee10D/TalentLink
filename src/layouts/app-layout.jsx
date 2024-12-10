import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="min-h-screen container mx-auto px-4 sm:px-8">
        <div className="grid-background"></div>
        <Header />
        <Outlet />
      </div>
      <div className="footer p-10 text-center bg-gray-800 mt-10">&copy; TalentLink</div>
    </div>
  );
};

export default AppLayout;
