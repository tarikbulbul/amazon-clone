import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

  const promise = loadStripe(
    "pk_test_51M4ZGjEj4aljyqdQrRg8rv79imM7JAzE1LDgXockcIbe3OwzgVaz2fGby0eTuGYUG0ap9LCe3grvBLatHu92LHVw00mJsvpvIG"
  );

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
        <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>} />
      </Routes>
    </Router>
  );
}

export default App;
