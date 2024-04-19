import React from "react";
import { Header } from "../header/header";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
    // <div className="relative">
    //   <div className="fixed left-0 right-0">
    //     <Header />
    //   </div>

    //   <main>
    //     <Outlet />
    //   </main>
    // </div>
  );
};
