import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';


const localizer = momentLocalizer(moment);

export const MyCalendar = (props) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={props.events}
        views={['month']}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500,  width: 1000, backgroundColor: "gray"}}
      />
    </div>
  );
}
