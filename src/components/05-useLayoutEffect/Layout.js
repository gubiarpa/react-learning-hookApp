import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../../styles/effects.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [quote]);

    return (
        <>
            <h2>Breaking Bad Quotes</h2>
            <hr />

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <div className='text-center mt-5'>
                <button className='btn btn-primary' onClick={increment}>
                    Next quote
                </button>
            </div>

            <blockquote className='text-end mt-5'>
                <p
                    className='blockquote mb-0'
                    ref={pTag}
                    >
                    { quote }
                </p>
            </blockquote>
        </>
    );
}
