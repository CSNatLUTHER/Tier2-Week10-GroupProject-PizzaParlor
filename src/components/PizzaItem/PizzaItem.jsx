import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function PizzaItem(props) {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  //const[thing, setThing]= useState('');

  return (
    <div>
      <h1>Pizza Option {props.pizza.id}</h1>
      <div>
        <h2>
          {props.pizza.name}
        </h2>
        <p>
          {props.pizza.description}
        </p>
        <h6>
          {props.pizza.price}
        </h6>
      </div>
    </div>
  )
}

export default PizzaItem;