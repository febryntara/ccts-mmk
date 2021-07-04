import React from "react";
import { Link } from "react-router-dom";

function NavbarExpand({ display }) {
  return (
    <ul className={display ? "m-expand m-restore" : "m-expand"}>
      <li>
        <Link to="/" className="m-expand-link">
          BERANDA
        </Link>
      </li>
      <li>
        <Link className="m-expand-link">
          LAYANAN
          <div>
            <Link className="link" to="/e-ktp">E-KTP</Link>
            <Link className="link" to="/perizinan">PERIZINAN</Link>
          </div>
        </Link>
      </li>
      <li>
        <Link className="m-expand-link">
          INFORMASI
          <div>
            <Link className="link" to="/berita">BERITA</Link>
            <Link className="link" to="/vaksin">VAKSIN</Link>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/galery" className="m-expand-link">
          GALERY
        </Link>
      </li>
    </ul>
  );
}

export default NavbarExpand;
