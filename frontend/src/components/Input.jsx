import React from 'react'

function Input() {
  return (
    <div className='form-group'>
        <label htmlFor="todo"></label>
        <input type="text" placeholder='Create a new todo...' id='todo' />
    </div>
  )
}

export default Input
