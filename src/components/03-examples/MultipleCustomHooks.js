import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';

export const MultipleCustomHooks = () => {

    const state = useFetch(`https://breakingbadapi.com/api/quotes/5`);
    console.log(state);

    return (
        <>
            <h1>Custom Hooks</h1>
        </>
    );
}
