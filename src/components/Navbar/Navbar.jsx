// LIBRARY
import React, { useEffect, useState } from "react";
// COMPONENT
import { AiOutlineMenu } from "react-icons/ai";
import NavbarExpand from "./NavbarExpand";
// FILES
import "./Navbar.css";
import logo from "../../assets/logoKutsel.png";
import NavbarNews from "./NavbarNews";

function Navbar() {
    const [expandDisplay, setExpandDisplay] = useState(false)
    const [newsDisplay, setNewsDisplay] = useState(false)
    const expandD = () => {
        setExpandDisplay(!expandDisplay)
        if (newsDisplay===true) {
            setNewsDisplay(!newsDisplay)
        }
    }
    const newsD = () => {
        setNewsDisplay(!newsDisplay)
        if (expandDisplay===true) {
            setExpandDisplay(!expandDisplay)
        }
    }
  return (
    <>
      <nav className="m-nav">
        <div className="m-nav-brand">
          <img src={logo} alt="" onClick={()=> newsD()}/>
          <h2>KUTA SELATAN</h2>
        </div>
        <div className="m-nav-menu-icon">
          <button onClick={()=> expandD()}>
            <AiOutlineMenu className="white" />
          </button>
        </div>
      </nav>
      {expandDisplay ? <NavbarExpand display={expandDisplay}/> : <NavbarExpand display={expandDisplay}/>}
      {newsDisplay ? <NavbarNews display={newsDisplay}/> : <NavbarNews display={newsDisplay}/>}
    </>
  );
}

export default Navbar;
