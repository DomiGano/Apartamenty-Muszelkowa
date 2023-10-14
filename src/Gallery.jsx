import React from "react"
import { useState } from "react"
import photo1 from "./images/gallery/photo1.jpg"
import photo2 from "./images/gallery/photo2.jpg"
import photo3 from "./images/gallery/photo3.jpg"
import photo4 from "./images/gallery/photo4.jpg"
import photo5 from "./images/gallery/photo5.jpg"
import photo6 from "./images/gallery/photo6.jpg"
import photo7 from "./images/gallery/photo7.jpg"
import photo8 from "./images/gallery/photo8.jpg"
import photo9 from "./images/gallery/photo9.jpg"


export const Gallery = () => {
    const [photo, setPhoto] = useState(1)
    const [gallery, setGalery] = useState(9)

    const galleryPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]

    const nextPhoto = () => {
        if(photo >= gallery) {
            setPhoto(1)
        } else {
            setPhoto(photo + 1)
        }
    }

    const prevPhoto = () => {
        if(gallery <= 1) {
            setPhoto(3)
        } else {
            setPhoto(photo - 1)
        }
    }

    const dotGenerator = (amount) => {
        const dots = []

        for(let i = 1; i <= amount; i++) {
            dots.push(<div key={i} style={{backgroundImage: galleryPhotos[i-1]}} onClick={() => setPhoto(i)} className={photo == i ? "active dot" : "dot"}></div>);
        }
        return dots;
    }

    return (
        <div className="gallery" id="gallery">
            
            <div className="container">
                <h2 className="gallery__title section__title">Galeria</h2>
                <div className="gallery__mainbox">
                    <img className="gallery__img" src={galleryPhotos[photo - 1]}></img>
                        </div>
                    <button className="gallery__button gallery__button--left" onClick={prevPhoto}><i className="fa-solid fa-circle-arrow-left"></i></button>
                    <button className="gallery__button gallery__button--right" onClick={nextPhoto}><i className="fa-solid fa-circle-arrow-right"></i></button>
                <div className="gallery__active">
                    {dotGenerator(gallery)}
                </div>
                </div>
            </div>
    )


}