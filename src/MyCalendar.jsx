import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pl';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const MyCalendar = (props) => {
  const [myEvents, setMyEvents] = useState([]);


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
              start: new Date(data.start.toDate()),
              end: new Date(data.end.toDate()),
            });
          });
  
          setMyEvents(events);
        })
        .catch((error) => {
          console.error('Error getting documents:', error);
        });
    };
  
    fetchData();
  }, []);  


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
      </div>
    </div>
  );
};

