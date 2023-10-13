import React from "react";

export const Location = () => {

    return (
        <div className="container">        
            <div className="location__box">
                <div className="map__frame" style={{position: "relative", height: 400, width: 650}}>
                    <div style={{overflow: "hidden", height:400, width:650}}>
                        <iframe className="google__map" style={{width: 650, height: 400, position: "relative", zIndex: 2}} src="https://maps.google.com/maps?q=Ko%C5%82obrzeg%20Muszelkowa%201C&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no">
                        </iframe>
                    </div>
                </div>
                <div className="location__info">
                    <h3 className="location__info__title"><i className="fa-solid fa-map-location-dot"></i>  Lokalizacja</h3>
                    <p className="adress__city adress">Kołobrzeg</p>
                    <p className="adress__street adress">ul.Muszelkowa 1c</p>
                    <p className="adress__text">Apartamenty na Muszelkowej 1C w Kołobrzegu to urokliwe miejsce, dosłownie kilka kroków od pięknej plaży nad Bałtykiem. Oferują one niezapomniane wakacje w sercu nadmorskiego uroku. Apartamenty zachwycają wygodą i luksusem, zapewniając doskonałe warunki do relaksu. Otoczone są różnorodnymi restauracjami, gdzie można degustować lokalne przysmaki, oraz atrakcjami turystycznymi, które zapełnią Twój czas ciekawymi doświadczeniami.</p>

                </div>
            </div>
        </div>
    )
}
