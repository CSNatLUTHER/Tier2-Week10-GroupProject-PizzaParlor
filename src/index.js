import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


//reducers
const getPizzas = (state = [], action) => {
      if(action.type === 'GET_PIZZAS'){
       state = action.payload
       return state;
      }  
      return state  
  }


  // Store
const storeInstance = createStore(
    combineReducers(
      {
        getPizzas
      }
    ),
    applyMiddleware(
      logger
    )
  );

ReactDOM.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();