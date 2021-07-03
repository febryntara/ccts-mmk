// LIBRARY
import React, { useState } from "react";
// COMPONENT
import { AiOutlineMenu } from "react-icons/ai";
// FILES
import "./Navbar.css";
import logo from "../../assets/logoKutsel.png";
import NavbarExpand from "./NavbarExpand";

function Navbar() {
    const [expandDisplay, setExpandDisplay] = useState(false)
  return (
    <>
      <nav className="m-nav">
        <div className="m-nav-brand">
          <img src={logo} alt="" />
          <h2>KUTA SELATAN</h2>
        </div>
        <div className="m-nav-menu-icon">
          <button onClick={()=> setExpandDisplay(!expandDisplay)}>
            <AiOutlineMenu className="white" />
          </button>
        </div>
      </nav>
      {expandDisplay ? <NavbarExpand display={expandDisplay}/> : <NavbarExpand display={expandDisplay}/>}
    </>
  );
}

export default Navbar;
