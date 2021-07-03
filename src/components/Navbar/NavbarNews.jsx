// LIBRARY
import React from "react";
// FILES
import "./Navbar.css";
import camat from "../../assets/camat.jpeg";
import navImage1 from "../../assets/navImage1.jpg";
import navImage2 from "../../assets/navImage2.jpg";
import navImage3 from "../../assets/navImage3.jpg";

function NavbarNews({ display }) {
  return (
    <div className={display ? "m-nav-news m-nav-restore" : "m-nav-news"}>
      <div>
        <img className="m-nav-image type1" src={camat} alt="" />
        <h5>OUR LORD</h5>
      </div>
      <ul>
        <li>
          <img className="m-nav-image type2" src={navImage1} alt="" />
        </li>
        <li>
          <img className="m-nav-image type2" src={navImage2} alt="" />
        </li>
        <li>
          <img className="m-nav-image type2" src={navImage3} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default NavbarNews;
