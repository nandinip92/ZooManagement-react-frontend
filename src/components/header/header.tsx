import React from "react";
import { Nav } from "./nav";
import "./styles.css";

export const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-light text-deep-black lg:h-24">
        <Nav />
      </header>
    </>
  );
};
