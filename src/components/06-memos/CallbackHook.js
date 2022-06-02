import React, {useState, useCallback} from 'react'

import '../../styles/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(() => {
        setCounter(c => c + 1);
    }, [setCounter])
    
    return (
        <>
            <h1>CallbackHook: {counter}</h1>
            <hr />
            
            <ShowIncrement increment={increment} />
        </>
    )
}
