// LIBRARY
import React from "react";
import Carousel from "../../components/Carousel/Carousel";
// COMPONENT
import Hero from "../../components/Hero/Hero";
// FILES
import "./MainPage.css";

function MainPage() {
  return (
    <div className="m-main-page">
      <Hero />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,224L34.3,197.3C68.6,171,137,117,206,101.3C274.3,85,343,107,411,149.3C480,192,549,256,617,256C685.7,256,754,192,823,149.3C891.4,107,960,85,1029,85.3C1097.1,85,1166,107,1234,144C1302.9,181,1371,235,1406,261.3L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <div className="m-main-con">
        <Carousel />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,256L48,266.7C96,277,192,299,288,277.3C384,256,480,192,576,192C672,192,768,256,864,277.3C960,299,1056,277,1152,229.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default MainPage;
