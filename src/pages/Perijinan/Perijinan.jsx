import React from "react";
import "./Perijinan.css";
import oss from "../../assets/oss.png"
import laperon from "../../assets/laperon.png"
function Perijinan() {
  return (
    <div className="m-serv-ijin">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,160L40,181.3C80,203,160,245,240,229.3C320,213,400,139,480,117.3C560,96,640,128,720,160C800,192,880,224,960,197.3C1040,171,1120,85,1200,74.7C1280,64,1360,128,1400,160L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="m-serv-ijin-con">
        <h2>Pengesahan IMB (Izin Mendirikan Bangunan) PERSYARATAN</h2>
        <ul>
          <li>Persyaratan Sesuai Blanko Yang Dikeluarkan Oleh BPPT.</li>
          <li>Fotocopy E-KTP</li>
          <li>
            Fotocopy Sertifikat/Akta Jual Beli/Surat Keterangan Tanah Yang Sah
            Sesuai Ketentuan.
          </li>
          <li>Fotocopy Pembayaran PBB Terakhir.</li>
          <li>Gambar Rencana Bangunan.</li>
          <li>Surat Penyanding.</li>
          <li>
            Surat Keterangan Yang Sudah Ditandatangani Kepala Lingkungan Dan
            Lurah Disahkan Camat.
          </li>
          <li>(ITR) Izin Tata Ruang</li>
        </ul>
        <h2>OSS (ONLINE SINGEL SUBMISSION)</h2>
        <img src={oss} alt="" />
        <h2>LAPERON (LAYANAN PERIZINAN ONLINE)</h2>
        <img src={laperon} alt="" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,256L40,266.7C80,277,160,299,240,293.3C320,288,400,256,480,234.7C560,213,640,203,720,202.7C800,203,880,213,960,229.3C1040,245,1120,267,1200,240C1280,213,1360,139,1400,101.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Perijinan;
