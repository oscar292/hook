import React, { useEffect, useState } from 'react';

import { Message } from './Message';
import './effect.css';

export const SimpleForm = () => {

    const [formState, setFomState]=useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(()=>{ 
        return 
    }, []);

    useEffect(()=>{
        //console.log('formState cambio');
    }, [formState]);

    useEffect(()=>{
        //console.log('El email cambio')
    }, [email]);

    const handeleInputChange = ({target})=>{
        setFomState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr/>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handeleInputChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handeleInputChange}
                />
            </div>

            {(name==='123') &&<Message/>}
        </>
    )
}
