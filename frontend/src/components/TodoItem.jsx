import axios from 'axios';
import React from 'react'
import { useDrag, useDrop } from 'react-dnd';

function TodoItem({ todo, index, moveTodo }) {
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
            let data = await axios.delete(`http://localhost:3500/todo/${id}`)

            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <li ref={ref} key={todo._id} className="list_todo--item">
        <div className="todo__content">
            <div className="complete"></div>
            <p className="text">{todo.todo}</p>
        </div>
        <p className='close_icon' onClick={()=> deleteTodo(todo._id)}>&#x2715;</p>
    </li>
  )
}

export default TodoItem