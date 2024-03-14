import React from "react";
import { Nav } from "./nav";
import "./styles.css"

export const Header: React.FC = () => {
  return (
    <header className="zooHeader">
      <h1 className="zooHeader__title">Mysterious Zoo</h1>
      <Nav />
    </header>
  );
};
