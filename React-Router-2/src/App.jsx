import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
      {/* =============== Components =============== */}
      <Navbar />
      {/* =========== Routing ======== */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App