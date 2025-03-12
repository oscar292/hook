import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'

export const MultipleCustomHooks = () => {

    const {counter, increment }= useCounter(1);
    const {loading,data} = useFetch(`https://reqres.in/api/users?=${counter}`);

    const user = data?.data[0];
    const {email, firstname } = user || {}; 
    console.log(email,firstname);

    return (
        <div>
            <h1>Request</h1>
            <hr/>
            {
                loading? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>

                )
                :
                (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{email}</p>
                        <footer className='blockquote-footer'>{firstname}</footer>
                    </blockquote>
                )
            }

            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente frase
            </button>

        </div>
    )
}