import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    increment, 
    decrement, 
    reset,
    incrementByAmount
 } from '../../slices/counterSlice';

const Counter = () => {
    //read state data from store by useSelector
    const count = useSelector((state) => state.counter.count);

    //update the state data form store by useDispatch
    const dispatch = useDispatch();

    const [ amountIncrement, setAmountIncrement ] = useState(0);

    //input only accept number unless it will be 0
    const addValue = Number(amountIncrement) || 0;

    const resetAll = () => {
        setAmountIncrement(0);
        dispatch(reset());
    }

  return (
    <section>
        <p style={{ fontWeight: 'bold', fontSize : '3rem'}}> { count } </p>
        <div>
            <button onClick = {() => dispatch(increment())}>+</button>&nbsp;
            <button onClick = {() => dispatch(decrement())}>-</button>
        </div>
        <div>
            <input 
                type="text"
                value={amountIncrement}
                onChange={ (e) => setAmountIncrement(e.target.value)}
            ></input>
            <div>
                <button onClick = { () => dispatch(incrementByAmount(addValue))} >Add Amount</button>&nbsp;
                <button onClick = { resetAll }>Reset</button>
            </div>
        </div>
    </section>
  )
}

export default Counter