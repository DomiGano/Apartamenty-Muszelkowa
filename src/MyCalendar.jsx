import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


const localizer = momentLocalizer(moment);

const myEvents = [
{        
  id: 1,
  title: 'REZERWACJA',
  start: new Date(2023, 8, 21, 0, 0, 0),
  end: new Date(2023, 8, 30, 23, 59, 59)
},
{        
  id: 2,
  title: 'REZERWACJA',
  start: new Date(2023, 8, 8, 0, 1, 0),
  end: new Date(2023, 8, 20, 23, 59, 59)
},  
]


export const MyCalendar = (props) => {
  return (
    <div className='main__calendar__box'>
      <div className='container'>
        <div className='calendar'>
          <h1 className='calendar__title'>Sprawdź dostępne terminy</h1>
        <Calendar
          localizer={localizer}
          events={myEvents}
          views={['month']}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500,  width: "100%", backgroundColor: "#FFF", padding: "1.5em"}}
        />
        </div>
      </div>
    </div>
  );
}
