import React from "react";
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"

export const Attractions = () => {

    return (
        <div className="Carusela">
            <img src={image1}></img>
            <img src={image2}></img>
            <img src={image3}></img>

        </div>
    )


}