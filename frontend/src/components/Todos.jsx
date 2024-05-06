import React from 'react'

function Todos() {
  return (
   <div className="list">
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
