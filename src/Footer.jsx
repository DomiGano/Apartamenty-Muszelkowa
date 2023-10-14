import React from "react";

export const Footer = (props) => {


    return (
        <footer className="footer">
            <p className="footer__info">Create by Dominik Ganowicz&reg;</p>
            <p className="footer__date">Originally created in 2023</p>
            {props.isAdminLog ? <p onClick={() => props.setIsAdminLog(false)} className="footer__logout"><i className="fa-solid fa-power-off icon"></i>Wyloguj</p> : null}
        </footer>
    )
}