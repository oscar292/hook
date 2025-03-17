const initialState = [{
    id:1,
    todo: 'Comprar pan',
    done: false
}];

const todoReduce = (state= initialState, action)=>{
    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReduce();
const newTodo = {
    id: 2,
    todo: 'Comprar pan', 
    done: false
}

const action = {
    type: 'agregar', 
    payload: newTodo
}

todos = todoReduce(todos, action);
console.log(todos);