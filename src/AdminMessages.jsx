import React, { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from './firebase';

export const AdminMessages = () => {
    const[myMessages, setMyMessages] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        if (!dataFetched) {
          fetchData();
        }
      }, [dataFetched]);
    
      const fetchData = () => {
        getDocs(collection(db, 'messages'))
          .then((querySnapshot) => {
            const messages = [];
    
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              messages.push({
                id: data.id,
                email: data.email,
                name: data.name,
                text: data.text,
                date: data.date,
              });
            });

            setMyMessages(messages);
            setDataFetched(true);
          })
          .catch((error) => {
            console.error('Error getting documents:', error);
          });
      };

    return (
        <section className="admin__messages" id="contact">
            <h2 className="admin__messages__title section__title">Wiadomości</h2>
            <div className='container'>
                <ul className='messages__box'>
            {myMessages.length <= 0 ? <h2 style={{fontSize: "1.5em"}} className='section__title'>Brak Nowych wiadomości</h2> : myMessages.map((element) => {
                return (
                    <li className='message' key={element.id}>
                        <p className='message__name'>Od: {element.name}</p>
                        <p className='message__email'>E-mail: {element.email}</p>
                        <p className='message__text'>Wiadomość: <span className='message__core__text'>{element.text}</span></p>
                        <p className='message__date'>Wysłana: {element.date}</p>
                    </li>
                )})}
                </ul>
            </div>
        </section>
    )
}