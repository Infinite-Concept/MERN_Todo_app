import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import axios from 'axios'

function Todos() {

    const[data, setData] = useState([])

    const Fetch = async () => {
        const todo = await axios.get("http://localhost:3500/todo")
        const data = await JSON.stringify(todo.data)

        const todos = JSON.parse(data)

        console.log(todos);

        setData(todos)

    }

    useEffect(() => {
        Fetch()
    }, [data])

  return (
   <div className="list">
        <div className="list_todo">
            {
                data.length == 0 ? <div></div> : 
                <ul>
                    {
                        data.map((todo, index) => {
                            return(
                                <li>
                                    <div className="complete"></div>
                                    <div className="text">{todo.todo}</div>
                                </li>
                            )}
                        )
                    }
                </ul>
            }
                    
        <div className="bottom">
            <p><span>5</span> items left</p>

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
