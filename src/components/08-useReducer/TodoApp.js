import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoRefucer';
import { TodoList} from './todoList'; 
import { TodoAdd } from './TodoAdd';
import "./style.css";

const init = ()=>{
    return  JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispach] = useReducer(todoReducer, [], init);

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

    const handleAddTodo = (newTodo)=>{
        
        dispach ({
            type: 'add',
            payload: newTodo
        })

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
                    < TodoAdd 
                        handleAddTodo= {handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}