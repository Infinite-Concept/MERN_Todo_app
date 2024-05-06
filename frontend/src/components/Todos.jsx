import React from 'react'

function Todos() {
  return (
    <div className="list_todo">
        <ul>
        <li>
            <div className="complete"></div>
            <div className="text">Complete online Javascript course</div>
        </li>

        <li>
            <div className="complete"></div>
            <div className="text">Jog around the park 3x</div>
        </li>

        <li>
            <div className="complete"></div>
            <div className="text">Read</div>
        </li>
    </ul>
    </div>
  )
}

export default Todos
