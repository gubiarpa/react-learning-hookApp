import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../../styles/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h2>Breaking Bad Quotes</h2>
            <hr />

            {
                loading
                ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className='text-end'>
                        <p className='blockquote mb-3'>
                            { quote }
                        </p>
                        <footer className='blockquote-footer'>
                            { author }
                        </footer>
                    </blockquote>
                )
            }

            <div className='text-center'>
                <button className='btn btn-primary' onClick={increment} disabled={loading}>
                    Next quote
                </button>
            </div>

        </>
    );
}
