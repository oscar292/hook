import React, { useReducer } from 'react'
import { todoReducer } from './todoRefucer';
import "./style.css";

const initalState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TodoApp = () => {

    const [todos, dispach] = useReducer(todoReducer, initalState);

    const handleSubmit = (e) =>{

        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea', 
            done: false
        }; 
        
        const action = {
            type: 'add',
            payload: newTodo
        }

        dispach(action);
        
    }

    return (
        <div>
        <h1>TodoApp({todos.length})</h1>
        <hr/>
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                    {
                       todos.map((todo,i)=>(
                            <li
                                key={todo.id}
                                className='list-group-item'
                            >
                                <p className='text-center'> {i+1} .{todo.desc}</p>
                                <button
                                    className='btn btn-danger'
                                >
                                    borrar
                                </button>
                            </li>
                       ))
                    }
                    </ul>
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