import React from "react";
import "./Ektp.css";
import gambar from "../../assets/ektp.png";
import News from "../../components/News/News";

function Ektp() {
  return (
    <div className="m-ektp-cont">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,288L26.7,250.7C53.3,213,107,139,160,122.7C213.3,107,267,149,320,160C373.3,171,427,149,480,122.7C533.3,96,587,64,640,64C693.3,64,747,96,800,112C853.3,128,907,128,960,133.3C1013.3,139,1067,149,1120,133.3C1173.3,117,1227,75,1280,74.7C1333.3,75,1387,117,1413,138.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <div className="m-serv-ktp">
        <h2 className="m-serv-ktp-title">E-KTP Berlaku Seumur Hidup</h2>
        <img src={gambar} alt="" />
        <h3>PENERBITAN, PERUBAHAN DAN PERBAIKAN E-KTP</h3>
        <div className="m-serv-ktp-ol-1">
          <h4>
            <u>TATA CARA</u>
          </h4>
          <ol>
            <li>
              Pemohon datang Ke Kecamatan Kuta Selatan membawa fotocopy KK
              (Kartu Keluarga)
            </li>
            <li>Pemohon menyerahkan berkas permohonan</li>
            <li>
              Operator melakukan perekaman E-KTP, setelah perekaman selesai,
              pemohon diarahkan untuk mendaftar percetakan E-KTP secara online
            </li>
          </ol>
        </div>
        <div className="m-serv-ktp-ol-1">
          <h4>
            <u>PERSYARATAN</u>
          </h4>
          <ol>
            <li>
              Pembuatan E-KTP Baru
              <ul>
                <li>Usia 17 Tahun</li>
                <li>Fotocopy KK (Kartu Keluarga)</li>
              </ul>
            </li>
            <li>
              Perbaikan E-KTP (Kerusakan atau Kehilangan)
              <ul>
                <li>Fotocopy KK (Kartu Keluarga)</li>
                <li>
                  Surat Keterangan Kehilangan Dari Kepolisian (Bagi Kehilangan
                  E-KTP)
                </li>
                <li>E-KTP Yang Rusak (Bagi Kerusakan E-KTP)</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <News />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,224L26.7,234.7C53.3,245,107,267,160,272C213.3,277,267,267,320,256C373.3,245,427,235,480,240C533.3,245,587,267,640,277.3C693.3,288,747,288,800,250.7C853.3,213,907,139,960,133.3C1013.3,128,1067,192,1120,218.7C1173.3,245,1227,235,1280,218.7C1333.3,203,1387,181,1413,170.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Ektp;
