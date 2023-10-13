import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const AdminPanel = (props) => {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [getLogin, setGetLogin] = useState("");
  const [getPassword, setGetPassword] = useState("")
  const [dataFetched, setDataFetched] = useState(false);
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState("")

  useEffect(() => {
    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched]);

  const fetchData = () => {
    getDocs(collection(db, 'admins'))
      .then((querySnapshot) => {
        

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          setGetLogin(data.login)
          setGetPassword(data.password)
        });
      })
      .catch((error) => {
        console.error('Error getting documents:', error);
      });
  };

  // Nasłuchuj klawiszy Ctrl + Shift + L
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.ctrlKey && event.shiftKey && event.key === 'L') {
        setIsLoginActive(true);
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const closeLogin = () => {
    setIsLoginActive(false);
  };


  const loginValidation = (e) => {
    e.preventDefault();
    if(login === getLogin && password === getPassword) {
        props.setIsAdminLog(true);
        closeLogin();
    } else {
        alert("BŁĘDNY LOGIN LUB HASŁO");
        closeLogin();
    }
  }

  return (
    <div style={{display: isLoginActive ? `block` : `none`}} >
        <div className='adminLogin'>
        <i onClick={closeLogin} className="fa-solid fa-xmark close"></i>
        <h2>Login</h2>
        <form>
      <input type='text' value={login} onChange={(e) => setLogin(e.target.value)} placeholder='Login'/>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Hasło'/>
      <button className='button' onClick={loginValidation}>Zaloguj</button>
      </form>
      
    </div>
    </div>
  );
}
