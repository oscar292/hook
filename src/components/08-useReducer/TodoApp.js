import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoRefucer';
import { useForm } from '../../hooks/useForm';
import { TodoList} from './todoList'; 
import "./style.css";

const init = ()=>{
    return  JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispach] = useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset] = useForm({
       description : ''
    })

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId)=>{
        const action = {
            type :'delete', 
            payload: todoId
        }
        dispach(action); 
    }

    const handleToggle = (todoId)=>{
        dispach({
            type: 'toggle', 
            payload: todoId
        });        
    }

    const handleSubmit = (e) =>{

        e.preventDefault();
        if(description.trim().length<=1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description, 
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispach(action);
        reset();
        
    }

    return (
        <div>
        <h1>TodoApp({todos.length})</h1>
        <hr/>
            <div className='row'>
                <div className='col-7'>
                    {/* {todo list} */}
                    <TodoList
                        todos= {todos}
                        handleDelete={handleDelete}
                        handleToggle={ handleToggle}
                    />
                </div>

                <div className='col-5'>
                    <h4>Agregar Todo</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name="description"
                            className='form-control'
                            placeholder='Aprender .....'
                            autoComplete='off'
                            value= {description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className='btn btn-outline-primary mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form>
                    Agregar
                </div>
            </div>
        </div>
    )
}