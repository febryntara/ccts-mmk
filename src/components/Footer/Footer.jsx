import React from "react";
import "./Footer.css";
import logo from "../../assets/logoKutsel.png";
import {
  GrInstagram,
  GrTwitter,
  GrFacebookOption,
  GrYoutube,
} from "react-icons/gr";

function Footer() {
  return (
    <footer className="m-footer">
      <img src={logo} alt="" />
      <h3>KUTA SELATAN</h3>
      <h5>PEMERINTAH KABUPATEN BADUNG</h5>
      <div className="m-footer-group">
        <GrInstagram/>
        <GrTwitter />
        <GrFacebookOption />
        <GrYoutube />
      </div>
      <p>&copy; 2010 - 2021 Dinas Komunikasi dan Informatika Pemerintah Kabupaten Badung. All Right Reserved</p>
    </footer>
  );
}

export default Footer;
