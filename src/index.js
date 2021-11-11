import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//reducers
const pizza = (state = "Pizza is Great ", action) => {
    console.log('hello world from a pizza reducer! Action:', action);
    if(action.type === 'GET_PIZZA'){
        state = "Pizza is REALLY great!!!"
    }
    return state
  }


  // Store
const storeInstance = createStore(
    combineReducers(
      {
        pizza
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