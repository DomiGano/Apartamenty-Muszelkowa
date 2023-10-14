import React, { useEffect, useState } from "react";
import image1 from "../images/image1.jpg"; // Import the image
import image2 from "../images/image2.jpg"; // Import the image
import image3 from "../images/image3.jpg"; // Import the image

const basenText = "Nasz apartament z basenem to idealne rozwiązanie dla wszystkich, którzy cenią sobie komfort i luksus podczas wakacji. Niezależnie od tego, czy przyjeżdżasz z rodziną, przyjaciółmi czy partnerem, zapewniamy Ci wyjątkowe miejsce, które pozwoli Ci cieszyć się w pełni zasłużonym wypoczynkiem."

const silowniaText = "Nasz apartament to nie tylko miejsce na relaks i wypoczynek, to także oaza dla miłośników aktywności fizycznej. W naszej siłowni znajdziesz wszystko, czego potrzebujesz, aby utrzymać swoją kondycję i czuć się w pełni energicznie. Niech Twój urlop stanie się okazją do dbania o siebie!"

const relaxText = "W naszym apartamencie dbamy o Twoje pełne zadowolenie i komfort, dlatego zapewniamy Ci dostęp do sauny i jacuzzi, gdzie możesz zrelaksować się i w pełni odprężyć. To doskonałe miejsce na romantyczny weekend, luksusowy wyjazd z przyjaciółmi lub rodzinny urlop."

export const Attractions = () => {
    const [attractions, setAttractions] = useState(1);
    const [title, setTitle] = useState("Basen");
    const [text, setText] = useState("");

    const next = () => {
        if (attractions >= 3) {
            setAttractions(1);
        } else {
            setAttractions(attractions + 1);
        }
    }

    const prev = () => {
        if (attractions <= 1) {
            setAttractions(3);
        } else {
            setAttractions(attractions - 1);
        }
    }

    const autoNext = () => {
        const interval = setTimeout(next, 10000);

        return () => clearTimeout(interval);
    }

    useEffect(() => {
        if (attractions === 1) {
            setTitle("Basen");
            setText(basenText);
        } else if (attractions === 2) {
            setTitle("Siłownia");
            setText(silowniaText);
        } else if (attractions === 3) {
            setTitle("Jacuzzi i Sauna");
            setText(relaxText);
        }
    }, [attractions]);

    useEffect(autoNext, [attractions]);

    return (
        <div className="carusela" id="attractions">
            <div className="container">
                <div className="carusela__mainbox">
                    <img className="carusela__img" src={attractions === 1 ? image1 : attractions === 2 ? image2 : image3} alt={`Attraction ${attractions}`} />
                    <div className="carusela__textbox">
                        <h3 className="carusela__textbox__title">{title}</h3>
                        <p className="carusela__textbox__text">{text}</p>
                    </div>
                    <button className="carusela__button carusela__button--left" onClick={prev}><i className="fa-solid fa-circle-arrow-left"></i></button>
                    <button className="carusela__button carusela__button--right" onClick={next}><i className="fa-solid fa-circle-arrow-right"></i></button>
                </div>
                <div className="carusela__active">
                    <div onClick={() => setAttractions(1)} className={attractions === 1 ? "active dot" : "dot"}></div>
                    <div onClick={() => setAttractions(2)} className={attractions === 2 ? "active dot" : "dot"}></div>
                    <div onClick={() => setAttractions(3)} className={attractions === 3 ? "active dot" : "dot"}></div>
                </div>
            </div>
        </div>
    );
}
