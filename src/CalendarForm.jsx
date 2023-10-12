import React, { useEffect, useState } from 'react';

export const CalendarForm = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const addToCalendar = () => {
        addDoc(collection(db, "events"), {
          start: startDate,
          end: endDate,
        })
          .then((docRef) => {
            alert("Termin został zarezerwowany");
          })
          .catch((e) => {
            console.error("Error adding document: ", e);
          });
          setEndDate('')
          setStartDate('')
      };
      
      const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
      };
      
      const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
      };

  return (
    <div className='calendar__menu'>
        <i className="fa-solid fa-xmark close"></i>
        <h4 className='calendar__menu__title'>REZERWACJE</h4>
        <form className='calendar__menu__form'> 
      <label className='calendar__menu__form__label'> Początek wyjazdu</label>
      <input
        type='date'
        value={startDate}
        onChange={handleStartDateChange}
      />
     
      <label className='calendar__menu__form__label'>Koniec wyjazdu</label>
      <input
        type='date'
        value={endDate}
        onChange={handleEndDateChange}
      />
      
    </form>
    <button className='button calendar__menu__button' onClick={() => addToCalendar}>REZERWACJA</button>
    </div>
  );
};

