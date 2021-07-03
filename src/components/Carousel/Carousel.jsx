// LIBRARY
import React from "react";
// FILES
import "./Carousel.css";
import image1 from "../../assets/carousel1.png";
import image2 from "../../assets/carousel2.png";
import image3 from "../../assets/carousel3.png";

function Carousel() {
  return (
    <div className="m-car">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="m-carousel">
              <div className="m-carousel-info">
                <h3>Waspada Bahaya Corona</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit ratione quae adipisci omnis recusandae voluptatum
                </p>
              </div>
              <img src={image1} className="m-carousel-image" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="m-carousel">
              <div className="m-carousel-info">
                <h3>Tingkatkan Imune Dengan Vaksin</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit ratione quae adipisci omnis recusandae voluptatum
                </p>
              </div>
              <img src={image2} className="m-carousel-image" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="m-carousel">
              <div className="m-carousel-info">
                <h3>Tetap Sehat & Jaga Jarak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit ratione quae adipisci omnis recusandae voluptatum
                </p>
              </div>
              <img src={image3} className="m-carousel-image" alt="..." />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
