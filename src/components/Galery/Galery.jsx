// LIBRARY
import React from 'react'
// FILES
import "./Galery.css"
import image1 from "../../assets/bali1.jpg"
import image2 from "../../assets/bali2.jpg"
import image3 from "../../assets/bali3.jpg"
import image4 from "../../assets/bali4.jpg"
import image5 from "../../assets/bali5.jpg"
import image6 from "../../assets/bali6.jpg"
import image7 from "../../assets/bali7.jpg"
import image8 from "../../assets/bali8.jpg"
import image9 from "../../assets/bali9.jpg"
import image10 from "../../assets/bali10.jpg"

function Galery() {
    return (
        <div className="m-galery">
            <h4>Galery</h4>
            <ul className="m-galery-box">
                <li><img src={image1} alt="" /></li>
                <li><img src={image2} alt="" /></li>
                <li><img src={image3} alt="" /></li>
                <li><img src={image4} alt="" /></li>
                <li><img src={image5} alt="" /></li>
                <li><img src={image6} alt="" /></li>
                <li><img src={image7} alt="" /></li>
                <li><img src={image8} alt="" /></li>
                <li><img src={image9} alt="" /></li>
                <li><img src={image10} alt="" /></li>
            </ul>
            
        </div>
    )
}

export default Galery
