import React from "react"
import { Nav } from "./nav"
import "./styles.css"

export const Header: React.FC = () => {
  return (
    <>
      <header className="fixed w-full top-0 left-0 z-50 flex items-center justify-between bg-light text-deep-black mb-5 lg:h-24">
        {/* <header className="zooHeader"> */}
        <Nav />
      </header>
    </>
  )
}
