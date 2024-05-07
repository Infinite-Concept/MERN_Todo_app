import React from 'react'
import Banner from './components/banner'
import "./App.css"
import Body from './components/Body'
import Todo from './components/Todo'

function App() {

  return (
    <div className='home'>
      <Banner />
      <Body />
      <Todo />
    </div>
    
  )
}

export default App
