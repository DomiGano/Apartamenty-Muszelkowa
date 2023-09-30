import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import { Navbar } from './navbar/Navbar';
import polankipark from '../images/polankipark.jpeg'
import { MyCalendar } from './MyCalendar';

export const App = () => {

  return (
    <>
    <img  style={{width: "100%"}} src={polankipark}></img>
    <Navbar/>
    <MyCalendar/>
    <h1>Apartamenty Muszelkowa</h1>
    </>
  )
}
