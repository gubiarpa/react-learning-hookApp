import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../../styles/effects.css';

export const CounterWithCustomHook = () => {
    
    const { counter: counter1, increment: increment1, decrement: decrement1, reset: reset1 } =  useCounter(50);
    const { counter: counter2, increment: increment2, decrement: decrement2, reset: reset2 } =  useCounter(50);

    return (
        <>
            <h1>Counter with Hook: { counter1 } + { counter2 } = { counter1 + counter2 }</h1>
            <hr />

            <button onClick={ () => { decrement1(); increment2(); } } className='btn btn-primary mx-1'>-</button>
            <button onClick={ () => { reset1(); reset2(); } } className='btn btn-primary mx-1'>Reset</button>
            <button onClick={ () => { increment1(); decrement2(); } } className='btn btn-primary mx-1'>+</button>
        </>
    );
}
