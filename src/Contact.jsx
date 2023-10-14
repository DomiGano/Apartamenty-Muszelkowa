import React, { useState } from "react";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const Contact = (props) => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [text, setText] = useState("")

    const sendMsg = (e) => {
        if(email.includes("@") && email.length > 5 && name !== "" && text !== "") {
            e.preventDefault();
              addDoc(collection(db, "messages"), {
                email: email,
                name: name,
                text: text,
                date: new Date(),
              })
                .catch((e) => {
                  console.error("Error adding document: ", e);
                });
                setEmail('')
                setName('')
                setText('')
            } else {
                if(!email.includes("@") && email.length < 5 ) {
                    alert('Adres E-mail jest nie prawidłowy!')
                }
                if(name == "") {
                    alert('Pole z imieniem nie może być puste!')
                }
                if(text == "") {
                    alert('Pole tekstowe nie może być puste!')
                }
            }
        };


    return (
        <section className="contact" id="contact">
            <h2 className="contact__title section__title">Kontakt</h2>
            <div className="container">
                <form className="contact__form">
                    <h3 className="contact__form__title">Formularz kontaktowy</h3>
                    <input
                    className="contact__form__input" 
                    value={email}
                    type="e-mail" 
                    placeholder="e-mail@gmail.com" 
                    onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <input 
                    className="contact__form__input"
                    value={name}
                    type="text" 
                    placeholder="Imię"
                    onChange={(e) => setName(e.target.value)}>
                    </input>
                    <textarea 
                    className="contact__form__textarea"
                    value={text}
                    rows={4} 
                    cols={40} 
                    placeholder="Twoja wiadomośc"
                    onChange={(e) => setText(e.target.value)}>
                    </textarea>
                    <button className="contact__form__button button" onClick={sendMsg}>Wyślij!</button>
                </form>
                <div className="contact__info">
                    <h3 className="contact__info__title">Dane kontaktowe:</h3>
                    <p className="contact__info__text contact__info__phone"><i className="fa-solid fa-phone icon contact__info__phone__icon"></i> 000 - 000 - 000</p>
                    <p className="contact__info__text contact__info__email"><i className="fa-solid fa-at icon contact__info__email__icon"></i> muszelkowa@apartamenty.pl</p>
                    <p className="contact__info__text seeYa">Do zobaczenia!</p>
                    <i className="fa-solid fa-sun contact__info__decoration animation__sun"></i>
                </div>
            </div>
        </section>
    )
}