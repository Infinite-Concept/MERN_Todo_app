import React from 'react'
import sun from "../assets/images/icon-sun.svg"
import Input from './Input'
import Todos from './Todos'

function Todo() {
  return (
    <div className='todo'>
        <div className="inner">
            <header>
                <h2>Todo</h2>
                <img src={sun} alt="" />
            </header>

            <main>
                <Input />

                <Todos />
            </main>

        </div>
    </div>
  )
}

export default Todo
