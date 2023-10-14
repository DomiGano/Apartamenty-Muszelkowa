import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { MyCalendar } from './MyCalendar';
import { Attractions } from './Attractions';
import { Location } from './Location';
import { Gallery } from './Gallery';
import { AdminPanel } from './AdminPanel';
import { Contact } from './Contact';
import { AdminMessages } from './AdminMessages';
import { Footer } from './Footer';

export const App = () => {
  const [isAdminLog, setIsAdminLog] = useState(false)
 

  return (
    <>
    <Navbar isAdminLog={isAdminLog} />
    <Attractions/>
    <MyCalendar isAdminLog={isAdminLog}/>
    <Location/>
    <Gallery/>
    {isAdminLog ? null : <AdminPanel isAdminLog={isAdminLog} setIsAdminLog={setIsAdminLog}/>}
    {isAdminLog ? <AdminMessages/> : <Contact/>}
    <Footer isAdminLog={isAdminLog} setIsAdminLog={setIsAdminLog}/>
    </>
  )
}
