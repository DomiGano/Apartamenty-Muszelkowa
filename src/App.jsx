import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import { Navbar } from './navbar/Navbar';
import polankipark from '../images/polankipark.jpeg'

export const App = () => {

  return (
    <>
    <img  style={{width: "100%"}} src={polankipark}></img>
    <Navbar/>
    <h1>Apartamenty Muszelkowa</h1>
    </>
  )
}
