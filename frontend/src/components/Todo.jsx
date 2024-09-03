import React, { useState } from 'react'
import sun from "../assets/images/icon-sun.svg"
import Input from './Input'
import Todos from './Todos'

function Todo() {
  const[data, setData] = useState([])
  return (
    <div className='todo'>
        <div className="inner">
            <header>
                <h2>Todo</h2>
                <img src={sun} alt="" />
            </header>

            <main>
                <Input setData={setData} />

                <Todos data={data} setData={setData} />
            </main>

        </div>
    </div>
  )
}

export default Todo
