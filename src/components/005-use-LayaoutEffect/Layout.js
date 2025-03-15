import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './Layout.css';

export const Layout = () => {

    const {counter, increment }= useCounter(1);
    const {data} = useFetch(`https://reqres.in/api/users?=${counter}`);

    const user = data?.data[0];
    const {email} = user || {}; 

    return (

        <div>

            <h1>Layout</h1>
            <hr/>

            <blockquote className='blockquote text-right'>
                <p className='mb-0'>{email}</p>
            </blockquote>
            
            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente frase
            </button>

        </div>
    )
}