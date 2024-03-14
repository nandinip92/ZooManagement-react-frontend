import React from "react";
import { NavLink } from "react-router-dom";
export const Nav: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "linkActive" : "linkInActive"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/animals"
              className={({ isActive }) =>
                isActive ? "linkActive" : "linkInActive"
              }
            >
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/species"
              className={({ isActive }) =>
                isActive ? "linkActive" : "linkInActive"
              }
            >
              Species
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/enclosures"
              className={({ isActive }) =>
                isActive ? "linkActive" : "linkInActive"
              }
            >
              Enclosures
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
