import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import { Navbar } from './navbar/Navbar';
import { MyCalendar } from './MyCalendar';
import { Attractions } from './Attractions';
import { Location } from './Location';
import { Gallery } from './Gallery';

export const App = () => {

  return (
    <>
    <Navbar/>
    <Attractions/>
    <MyCalendar/>
    <Location/>
    <Gallery/>
   
    
    
   
    </>
  )
}
