import React from 'react';
import axios from 'axios';
import './App.css';
import { TextField } from '@material-ui/core';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function App() {

  // const reducerName = useSelector(store => store.reducerName);
  
  const pizza = useSelector(store => store.pizza);
  const dispatch = useDispatch();
  
  const getName = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <img src='images/pizza_photo.png' />
      <br></br>
      <button onClick={()=>dispatch( { type: 'GET_PIZZA' } ) }>Get Pizza Message</button>
      <h1>{pizza}</h1>
  
    </div>
  );
}

export default App;
