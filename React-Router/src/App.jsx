import React from 'react'
import { Route, Routes, Link } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
const App = () => {
  return (
   <>
      <div className='text-center bg-amber-200 '>
      <Link className='underline ' to='/'>Home</Link>
      <Link className='underline pl-10 pr-10' to='/about'> About</Link>
      <Link className='underline ' to='/contact'>Contact</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App