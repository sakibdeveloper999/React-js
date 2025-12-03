import React from 'react'
import {Link } from 'react-router'
import Hero from '../assets/hero.png'
const Navbar = () => {
  return (
    <>
    <div className="flex font-bold text-2xl justify-between bg-amber-300 p-5">
      <div className="ml-10">
        <Link to='/'><h1>Logo</h1></Link>
      </div>
      <div className="mr-30">
        <ul className='flex font-bold text-2xl'>
          <li><Link to='/' className='hover:text-red-500'>Home</Link></li>
          <li><Link to='/about' className='pl-10 pr-10 hover:text-red-500'>About</Link></li>
          <li><Link to='/contact' className='hover:text-red-500'>Contact</Link></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar