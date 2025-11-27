import React from 'react'
import Home from './components/Home'
import TodoApp from './components/TodoApp'
import Api from './components/Api'

const App = () => {
  return (
    <>
      <div className="">
        <div className=" ">
          <Home/>
          <TodoApp/>
          <Api/>
        </div>
      </div>
    </>
  )
}

export default App