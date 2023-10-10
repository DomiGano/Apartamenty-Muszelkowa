import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import { Navbar } from './navbar/Navbar';
import polankipark from '../images/polankipark.jpeg'
import { MyCalendar } from './MyCalendar';
import { Attractions } from './Attractions';

export const App = () => {

  return (
    <>
    <Navbar/>
    <Attractions/>
    <MyCalendar/>
    <h1>Apartamenty Muszelkowa</h1>
    </>
  )
}
