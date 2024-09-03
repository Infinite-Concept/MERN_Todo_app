import axios from 'axios';
import React from 'react'
import { useDrag, useDrop } from 'react-dnd';

function TodoItem({ todo, index, moveTodo, setData }) {
    const ref = React.useRef(null);

    const [, drag] = useDrag({
        type: 'TODO',
        item: { index }
    });

    const [, drop] = useDrop({
        accept: 'TODO',
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveTodo(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    drag(drop(ref));

    const deleteTodo = async (id) => {
        try {
            let response = await axios.delete(`http://localhost:3500/todo/${id}`)
            if(response.data.status){
                setData(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const completeTodo = async (id) => {
        try {
            let response = await axios.put(`http://localhost:3500/todo/${id}`)

            console.log(response);
            
        } catch (error) {
            console.error(error);
            
        }
    }

  return (
    <li ref={ref} key={todo._id} className="list_todo--item">
        <div className="todo__content">
            <div className="complete" onClick={() => completeTodo(todo._id)}></div>
            <p className="text">{todo.todo}</p>
        </div>
        <p className='close_icon' onClick={()=> deleteTodo(todo._id)}>&#x2715;</p>
    </li>
  )
}

export default TodoItem