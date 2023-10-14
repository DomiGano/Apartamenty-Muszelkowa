import React from "react"
import { useState } from "react"

export const Gallery = () => {
    const [photo, setPhoto] = useState(1)
    const [gallery, setGalery] = useState(9)

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
            dots.push(<div key={i} style={{backgroundImage: `url(../images/gallery/photo${i}.jpg)`}} onClick={() => setPhoto(i)} className={photo == i ? "active dot" : "dot"}></div>);
        }
        return dots;
    }

    return (
        <div className="gallery" id="gallery">
            
            <div className="container">
                <h2 className="gallery__title section__title">Galeria</h2>
                <div className="gallery__mainbox">
                    <img className="gallery__img" src={`../images/gallery/photo${photo}.jpg`}></img>
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