import React, { useEffect, useState } from "react";
import "./Vaksin.css";

function Vaksin() {
  const initialState = 30245;
  const [count, setCount] = useState(initialState);
  useEffect(() => {
    const interval = setInterval(() => setCount(count + 3), 2000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div className="m-info-vaksin">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,224L40,192C80,160,160,96,240,74.7C320,53,400,75,480,85.3C560,96,640,96,720,122.7C800,149,880,203,960,202.7C1040,203,1120,149,1200,149.3C1280,149,1360,203,1400,229.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="m-info-vaksin-con">
        <h2>DATA VAKSINASI COVID 19</h2>
        <h3>KUTA SELATAN</h3>
        <div className="m-info-vaksin-data">
          <h1>{count}</h1>
        </div>
        <p>Orang sudah vaksin</p>
        <p>kamu kapan?</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,160L80,186.7C160,213,320,267,480,282.7C640,299,800,277,960,245.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Vaksin;
