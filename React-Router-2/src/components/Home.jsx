import React from 'react'
import Hero from '../assets/hero.png'
const Home = () => {
  return (
    <>
      <div className="p-[10%] h-screen m-auto flex bg-black text-white">
        <div className="w-[50%]">
          <h1 className='text-5xl '>Building digital <br /><span className='text-blue-700'>experiences</span> that matter</h1>
          <p className='mt-10 text-2xl'>I craft beautiful, functional web applications with modern technologies and thoughtful user experiences. Let's build something amazing together!</p>
          <button className=' p-5 bg-blue-700 rounded-2xl mt-10 '>VIEW WORK</button>
          <button className=' p-5 bg-blue-700 rounded-2xl mt-10 ml-5'>RESUME</button>
        </div>
        <div className="w-[50%] pl-30">
          <img src={Hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home