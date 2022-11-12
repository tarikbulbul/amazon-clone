import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if(authUser) {
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Home/></>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<h1>OrderPage</h1>} />
        <Route path='/checkout' element={<><Header/><Checkout/></>} />
      </Routes>
    </Router>
  );
}

export default App;
