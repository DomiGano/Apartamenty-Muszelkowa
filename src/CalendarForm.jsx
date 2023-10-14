import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const CalendarForm = (props) => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [guests, setGuests] = useState();
    const [price, setPrice] = useState(0);
    const [advance, setAdvance] = useState(0);

    const handleAddButtonClick = () => {
          props.setAddingMode(false);
        };

    const addToCalendar = (e) => {
      e.preventDefault();
        addDoc(collection(db, "events"), {
          start: startDate,
          end: endDate,
          guests: guests,
          price: price,
          advance: advance,
        })
          .then((docRef) => {
            alert("Termin został zarezerwowany");
          })
          .catch((e) => {
            console.error("Error adding document: ", e);
          });
          setEndDate('')
          setStartDate('')
          setGuests('')
          setPrice(0)
          setAdvance(0)
          props.dataFetched(false)
      };
            

  return (
    <div className='calendar__menu'>
        <i onClick={handleAddButtonClick} className="fa-solid fa-xmark close"></i>
        <h4 className='calendar__menu__title'>REZERWACJE</h4>
        <form className='calendar__menu__form'> 
      <label className='calendar__menu__form__label'> Początek wyjazdu</label>
      <input
        type='date'
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
     
      <label className='calendar__menu__form__label'>Koniec wyjazdu</label>
      <input
        type='date'
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <label className='calendar__menu__form__label'>Goście</label>
      <input
        type='text'
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
        <label className='calendar__menu__form__label'>Cena za dobę</label>
      <input
        type='text'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
         <label className='calendar__menu__form__label'>Zaliczka</label>
      <input
        type='text'
        value={advance}
        onChange={(e) => setAdvance(e.target.value)}
      />
      <button className='button calendar__menu__button' onClick={addToCalendar}>REZERWACJA</button>
    </form>
    </div>
  );
};

