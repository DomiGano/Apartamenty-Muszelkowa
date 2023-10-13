import { useState, useEffect } from 'react';
import { Calendar } from 'react-big-calendar';
import { Navbar } from './navbar/Navbar';
import { MyCalendar } from './MyCalendar';
import { Attractions } from './Attractions';
import { Location } from './Location';
import { Gallery } from './Gallery';
import { AdminPanel } from './AdminPanel';

export const App = () => {
  const [isAdminLog, setIsAdminLog] = useState(false)
 

  return (
    <>
    <Navbar/>
    <Attractions/>
    <MyCalendar isAdminLog={isAdminLog}/>
    <Location/>
    <Gallery/>
    <AdminPanel isAdminLog={isAdminLog} setIsAdminLog={setIsAdminLog}/>
    </>
  )
}
