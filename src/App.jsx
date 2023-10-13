import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import { Navbar } from './navbar/Navbar';
import polankipark from '../images/polankipark.jpeg'
import { MyCalendar } from './MyCalendar';
import { Attractions } from './Attractions';
import { Location } from './Location';

export const App = () => {

  return (
    <>
    <Navbar/>
    <Attractions/>
    <MyCalendar/>
    <Location/>
    </>
  )
}
