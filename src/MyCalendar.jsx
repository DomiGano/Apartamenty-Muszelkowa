import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pl';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const MyCalendar = (props) => {
  const [myEvents, setMyEvents] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();


//Firebase pobieranie danyc z bazy danych oraz konwersja tych danych do state w celu późniejszego ich otworzenia w kalendarzu
  useEffect(() => {
    const fetchData = () => {
      getDocs(collection(db, 'events'))
        .then((querySnapshot) => {
          const events = [];
  
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            events.push({
              id: doc.id,
              title: 'REZERWACJA',
              start: new Date(data.start),
              end: new Date(data.end),
            });
          });
  
          setMyEvents(events);
        })
        .catch((error) => {
          console.error('Error getting documents:', error);
        });
    };
  
    fetchData();
  }, [myEvents]);  

// Dodawanie danych do bazy danych 

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

  const messages = {
    previous: 'Poprzedni',
    next: 'Następny',
    today: 'Dziś',
  };

  const localizer = momentLocalizer(moment);

  return (
    <div className='main__calendar__box'>
      <div className='container'>
        <div className='calendar'>
          <h1 className='calendar__title'>Sprawdź dostępne terminy</h1>
          <Calendar
            messages={messages}
            localizer={localizer}
            events={myEvents}
            views={['month']}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 500, width: '100%', backgroundColor: '#FFF', padding: '1.5em' }}
          />
        </div>
        <form>
        <h1>REZERWACJE</h1>
      <br></br>
      <label> Początek wyjazdu </label>
      <input
        type='date'
        value={startDate}
        onChange={handleStartDateChange}
      />
      <br></br>
      <label> Koniec wyjazdu </label>
      <input
        type='date'
        value={endDate}
        onChange={handleEndDateChange}
      />
    </form>
    <button onClick={() => addToCalendar()}>REZERWACJA</button>
      </div>
    </div>
  );
};

