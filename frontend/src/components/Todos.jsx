import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TodoItem from './TodoItem';

function Todos() {

    const[data, setData] = useState([])

    const Fetch = async () => {
        const todo = await axios.get("http://localhost:3500/todo")

        setData(todo.data)
    }

    useEffect(() => {
        Fetch()
    }, [])

    const moveTodo = (fromIndex, toIndex) => {
        const updatedData = [...data];
        const [movedTodo] = updatedData.splice(fromIndex, 1);
        updatedData.splice(toIndex, 0, movedTodo);
        setData(updatedData);
    };
    

  return (
   <div className="list">
        <div className="list_todo">
            <DndProvider backend={HTML5Backend}>
                {
                    data.length == 0 ? <div></div> : 
                    <ul key="todo-list">
                        {
                            data.map((todo, index) => (
                                <TodoItem key={todo.id} todo={todo} index={index} moveTodo={moveTodo} />
                            ))
                        }
                    </ul>
                }
            </DndProvider>

            <div className="bottom">
                <p><span>{data.length}</span> items left</p>

                <ul>
                    <li className='active'>All</li>
                    <li>Active</li>
                    <li>Completed</li>
                </ul>

                <p className='clear'>Clear Completed</p>
            </div>
        
        </div>

        <div className="footer">
            <p>Drag and drop to reorder list</p>
        </div>
   </div>
  )
}

export default Todos
