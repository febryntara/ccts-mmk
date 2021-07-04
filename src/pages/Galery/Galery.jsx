// LIBRARY
import React, { useState } from "react";
// FILES
import "../../components/Galery/Galery.css";
import image1 from "../../assets/bali1.jpg";
import image2 from "../../assets/bali2.jpg";
import image3 from "../../assets/bali3.jpg";
import image4 from "../../assets/bali4.jpg";
import image5 from "../../assets/bali5.jpg";
import image6 from "../../assets/bali6.jpg";
import image7 from "../../assets/bali7.jpg";
import image8 from "../../assets/bali8.jpg";
import image9 from "../../assets/bali9.jpg";
import image10 from "../../assets/bali10.jpg";
import image11 from "../../assets/bali11.jpg";
import image12 from "../../assets/bali12.jpg";
import image13 from "../../assets/bali13.jpg";
import image14 from "../../assets/bali14.jpg";
import image15 from "../../assets/bali15.jpg";
import image16 from "../../assets/bali16.jpg";
import image17 from "../../assets/bali17.jpg";
import image18 from "../../assets/bali18.jpg";
import image19 from "../../assets/bali19.jpg";
import image20 from "../../assets/bali20.jpg";
import image21 from "../../assets/bali21.jpg";
import image22 from "../../assets/bali22.jpg";

function Galery() {
    const [display1, setDisplay1] = useState(false)
    const [display2, setDisplay2] = useState(false)
    const [display3, setDisplay3] = useState(false)
    const [display4, setDisplay4] = useState(false)
    const [display5, setDisplay5] = useState(false)
    const [display6, setDisplay6] = useState(false)
    const [display7, setDisplay7] = useState(false)
    const [display8, setDisplay8] = useState(false)
    const [display9, setDisplay9] = useState(false)
    const [display10, setDisplay10] = useState(false)
    const [display11, setDisplay11] = useState(false)
    const [display12, setDisplay12] = useState(false)
    const [display13, setDisplay13] = useState(false)
    const [display14, setDisplay14] = useState(false)
    const [display15, setDisplay15] = useState(false)
    const [display16, setDisplay16] = useState(false)
    const [display17, setDisplay17] = useState(false)
    const [display18, setDisplay18] = useState(false)
    const [display19, setDisplay19] = useState(false)
    const [display20, setDisplay20] = useState(false)
    const [display21, setDisplay21] = useState(false)
    const [display22, setDisplay22] = useState(false)
    
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,64L40,64C80,64,160,64,240,69.3C320,75,400,85,480,112C560,139,640,181,720,202.7C800,224,880,224,960,208C1040,192,1120,160,1200,138.7C1280,117,1360,107,1400,101.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="m-galery">
        <h4>Galery</h4>
        <ul className="m-galery-box">
          <li onClick={()=> setDisplay1(!display1)}>
            <img className={display1 ? "m-peek" : null} src={image1} alt="" />
          </li>
          <li onClick={()=> setDisplay2(!display2)}>
            <img className={display2 ? "m-peek" : null} src={image2} alt="" />
          </li>
          <li onClick={()=> setDisplay3(!display3)}>
            <img className={display3 ? "m-peek" : null} src={image3} alt="" />
          </li>
          <li onClick={()=> setDisplay4(!display4)}>
            <img className={display4 ? "m-peek" : null} src={image4} alt="" />
          </li>
          <li onClick={()=> setDisplay5(!display5)}>
            <img className={display5 ? "m-peek" : null} src={image5} alt="" />
          </li>
          <li onClick={()=> setDisplay6(!display6)}>
            <img className={display6 ? "m-peek" : null} src={image6} alt="" />
          </li>
          <li onClick={()=> setDisplay7(!display7)}>
            <img className={display7 ? "m-peek" : null} src={image7} alt="" />
          </li>
          <li onClick={()=> setDisplay8(!display8)}>
            <img className={display8 ? "m-peek" : null} src={image8} alt="" />
          </li>
          <li onClick={()=> setDisplay9(!display9)}>
            <img className={display9 ? "m-peek" : null} src={image9} alt="" />
          </li>
          <li onClick={()=> setDisplay10(!display10)}>
            <img className={display10 ? "m-peek" : null} src={image10} alt="" />
          </li>
          <li onClick={()=> setDisplay11(!display11)}>
            <img className={display11 ? "m-peek" : null} src={image11} alt="" />
          </li>
          <li onClick={()=> setDisplay12(!display12)}>
            <img className={display12 ? "m-peek" : null} src={image12} alt="" />
          </li>
          <li onClick={()=> setDisplay13(!display13)}>
            <img className={display13 ? "m-peek" : null} src={image13} alt="" />
          </li>
          <li onClick={()=> setDisplay14(!display14)}>
            <img className={display14 ? "m-peek" : null} src={image14} alt="" />
          </li>
          <li onClick={()=> setDisplay15(!display15)}>
            <img className={display15 ? "m-peek" : null} src={image15} alt="" />
          </li>
          <li onClick={()=> setDisplay16(!display16)}>
            <img className={display16 ? "m-peek" : null} src={image16} alt="" />
          </li>
          <li onClick={()=> setDisplay17(!display17)}>
            <img className={display17 ? "m-peek" : null} src={image17} alt="" />
          </li>
          <li onClick={()=> setDisplay18(!display18)}>
            <img className={display18 ? "m-peek" : null} src={image18} alt="" />
          </li>
          <li onClick={()=> setDisplay19(!display19)}>
            <img className={display19 ? "m-peek" : null} src={image19} alt="" />
          </li>
          <li onClick={()=> setDisplay20(!display20)}>
            <img className={display20 ? "m-peek" : null} src={image20} alt="" />
          </li>
          <li onClick={()=> setDisplay21(!display21)}>
            <img className={display21 ? "m-peek" : null} src={image21} alt="" />
          </li>
          <li onClick={()=> setDisplay22(!display22)}>
            <img className={display22 ? "m-peek" : null} src={image22} alt="" />
          </li>
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16161d"
          fill-opacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,197.3C320,213,400,203,480,202.7C560,203,640,213,720,234.7C800,256,880,288,960,272C1040,256,1120,192,1200,160C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Galery;
