import React, { useState } from "react"
import { NavLink } from "react-router-dom"
export const Nav: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Animals", path: "/animals" },
    { name: "Species", path: "/species" },
    { name: "Enclosures", path: "/enclosures" },
  ]

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const closeMenuOnMobile = () => {
    setShowMenu(false)
  }
  return (
    <>
      <NavLink to="/">
        <div className="flex flex-wrap items-center">
          <img
            className="h-full max-h-12 lg:max-h-24"
            src="./src/assets/ZooLogo.png"
            alt="logo"
          />

          <h3 className="ml-4 mr-24 text-2.5xl lg:text-3xl font-titleFont font-bold leading-none">
            Mysterious Zoo
          </h3>
        </div>
      </NavLink>
      <nav className="border-2 border-indigo-600 justify-end">
        <section className="MOBILE-MENU flex lg:hidden">
          <div className={showMenu ? "showNavMenu" : "hideNavMenu"}>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              {menuItems.map(({ name, path }) => (
                <li>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "linkActive" : "linkInactive"
                    }
                    onClick={closeMenuOnMobile}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`HAMBURGER-ICON ${showMenu ? "active" : ""} space-y-1`}
            onClick={toggleMenu}
          >
            <span className="BAR block h-1 w-8 bg-dark"></span>
            <span className="BAR block h-1 w-8 bg-dark"></span>
            <span className="BAR block h-1 w-8 bg-dark"></span>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-6 lg:flex">
          {menuItems.map(({ name, path }) => (
            <li>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "linkActive" : "linkInactive"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

// return (
//   <>
//     <nav className="navbar">
//       <ul className="navbar-list">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "linkActive" : "linkInActive"
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/animals"
//             className={({ isActive }) =>
//               isActive ? "linkActive" : "linkInActive"
//             }
//           >
//             Animals
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/species"
//             className={({ isActive }) =>
//               isActive ? "linkActive" : "linkInActive"
//             }
//           >
//             Species
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/enclosures"
//             className={({ isActive }) =>
//               isActive ? "linkActive" : "linkInActive"
//             }
//           >
//             Enclosures
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   </>
// );
