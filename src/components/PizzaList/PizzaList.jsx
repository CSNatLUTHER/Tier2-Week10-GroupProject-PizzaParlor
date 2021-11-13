import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem'


function PizzaList() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const getPizzas = useSelector(store => store.getPizzas);
  const dispatch = useDispatch();
  //const[thing, setThing]= useState('');

  return (
    <div>
      <div id="PizzaList">
        <h1>
          Pizza List
        </h1>
            { getPizzas.map( pizza =>(<PizzaItem className="itemBox" pizza={pizza} key={pizza.id}/>))}
        </div>
    </div>
  )
}

export default PizzaList;