import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TodoItem from './TodoItem';

function Todos({data, setData}) {

    const[showTodoItem, setShowTodoItem] = useState("all")

    const Fetch = async () => {
        const todo = await axios.get("http://localhost:3500/todo")
        let todoItem = await todo.data
        return todoItem
    }

    useEffect(() => {
        return async () => {
            let fetchTodo = await Fetch()
            setData(fetchTodo);
        }
    }, [])

    const moveTodo = (fromIndex, toIndex) => {
        const updatedData = [...data];
        const [movedTodo] = updatedData.splice(fromIndex, 1);
        updatedData.splice(toIndex, 0, movedTodo);
        setData(updatedData);
    };

    const clearComplete = async () => {
        try {
            let response = await axios.delete("http://localhost:3500/complete/todo")
            if(response.data.status){
                setData(response.data.data)
            }   
        } catch (error) {
            console.error(error);
            
        }
    }

    const showComplete = async () => {
        let fetchTodo = await Fetch()
        let complete = fetchTodo.filter(item => item.isCompleted == true)
        setData(complete)
        setShowTodoItem("complete")
    }

    const showAll = async () => {
        let fetchTodo = await Fetch()
        setData(fetchTodo);
        setShowTodoItem("all")
    }

    const showActive = async () => {
        let fetchTodo = await Fetch()
        let active = fetchTodo.filter(item => item.isCompleted !== true)
        setData(active)
        setShowTodoItem("active")
    }

  return (
   <div className="list">
        <div className="list_todo">
            <DndProvider backend={HTML5Backend}>
                {
                    data.length == 0 ? <div className='no-todo'>
                        <p>No todo available now</p>
                        <span>Create todo</span>
                    </div> : 
                    <ul key="todo-list">
                        {
                            data.map((todo, index) => (
                                <TodoItem key={todo._id} todo={todo} index={index} moveTodo={moveTodo} setData={setData} />
                            ))
                        }
                    </ul>
                }
            </DndProvider>

            <div className="bottom">
                <p><span>{data.length}</span> items left</p>

                <ul className='bottom__section'>
                    <li className={`${showTodoItem == 'all' && 'active'}`} onClick={showAll}>All</li>
                    <li className={`${showTodoItem == 'active' && 'active'}`} onClick={showActive}>Active</li>
                    <li className={`${showTodoItem == 'complete' && 'active'}`} onClick={showComplete}>Completed</li>
                </ul>

                <p className='clear' onClick={clearComplete}>Clear Completed</p>
            </div>
        
        </div>

        <div className="footer">
            <p>Drag and drop to reorder list</p>
        </div>
   </div>
  )
}

export default Todos
