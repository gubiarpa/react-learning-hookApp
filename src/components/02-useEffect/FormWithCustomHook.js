import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';
import { Message } from './Message';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambió');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <h1>Form with Custom Hook</h1>
                <hr />

                <div className='form-group'>
                    <input
                        type='text'
                        name='name'
                        className='form-control'
                        placeholder='Your name'
                        autoComplete='off'
                        value={ name }
                        onChange={ handleInputChange }
                        />
                </div>

                <div className='form-group mt-2'>
                    <input
                        type='text'
                        name='email'
                        className='form-control'
                        placeholder='Your email'
                        autoComplete='off'
                        value={ email }
                        onChange={ handleInputChange }
                        />
                </div>

                <div className='form-group mt-2'>
                    <input
                        type='password'
                        name='password'
                        className='form-control'
                        placeholder='Your password'
                        autoComplete='off'
                        value={ password }
                        onChange={ handleInputChange }
                        />
                </div>
                <hr />

                { (name === '123') && <Message /> }
                <hr />

                <button type='submit' className='btn btn-primary'>
                    Guardar
                </button>
            </form>
        </>
  )
}
