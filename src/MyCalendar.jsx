import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pl';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { CalendarForm } from './CalendarForm';

export const MyCalendar = (props) => {
  const [addingMode, setAddingMode] = useState(false);
  const [myEvents, setMyEvents] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  // Firebase pobieranie danych z bazy danych oraz konwersja tych danych do stanu w celu późniejszego ich otworzenia w kalendarzu
  useEffect(() => {
    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched]);

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
        setDataFetched(true);
      })
      .catch((error) => {
        console.error('Error getting documents:', error);
      });
  };

  const messages = {
    previous: 'Poprzedni',
    next: 'Następny',
    today: 'Dziś',
  };

  const localizer = momentLocalizer(moment);

  return (
    <>
    <div className='main__calendar__box' id="calendar">
      <div className='container'>
        <div className='calendar'>
        <i style={{display: props.isAdminLog ? "block" : "none"}} onClick={() => setAddingMode(true)} className="fa-regular fa-calendar-plus add"></i>
          <h1 className='calendar__title section__title '>Sprawdź dostępne terminy</h1>
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
        
      </div>
    </div>
    <div className="form__background" style={{ display: addingMode ? 'block' : 'none' }}>
    <CalendarForm setAddingMode={setAddingMode} dataFetched={setDataFetched}/>
    </div>
    </>
  );
};
