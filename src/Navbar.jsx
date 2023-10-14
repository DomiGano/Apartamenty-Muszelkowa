import React from "react";

export const Navbar = (props) => {


    return (
        <nav className="navigation" style={{}}>
            <div className="container">
                <div className="navigation__logo">
                    <h1 className="logo__title">Muszelkowa Apatamenty</h1>
                </div>

                <ul className="navigation__list">
                    <li className="navigation__list__element"><a href="#attractions"><i className="fa-solid fa-person-biking"></i>&nbsp;Atrakcje</a></li>
                    <li className="navigation__list__element"><a href="#calendar"> <i className="fa-solid fa-calendar-days"></i>&nbsp;Sprawdź Dostępne Terminy</a></li>
                    <li className="navigation__list__element"><a href="#location"><i className="fa-solid fa-location-dot"></i>&nbsp;Lokalizacja</a></li>
                    <li className="navigation__list__element"><a href="#contact"><i className="fa-regular fa-envelope"></i>&nbsp;{props.isAdminLog ? "Wiadomości" : "Kontakt"}</a></li>
                </ul>

            </div>
        </nav>
    )
}