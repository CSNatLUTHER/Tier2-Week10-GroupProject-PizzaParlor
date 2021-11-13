import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { TextField } from '@material-ui/core';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  const dispatch = useDispatch();

  useEffect( ()=>{
    getPizzaOptions();
  }, []);

  const getPizzaOptions=()=>{
    axios.get( '/api/pizza' ).then(
        response =>{
          dispatch({type:'GET_PIZZAS', payload: response.data })
        }).catch(
          (err)=>{
           alert('nope');
            console.log(err);
        })
  };
 
  
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
      <PizzaList />
    </div>
  );
}

export default App;
