import React from 'react'
import { ArrowRight } from 'lucide-react';


const Card = (card) => {
  return (
    <div className='  bg-gray-600 rounded-2xl shrink-0 h-full w-70 relative overflow-hidden '>
      <img className='rounded-lg h-full w-full object-cover ' src={card.image} alt="" />

      <div className='absolute bottom-0 left-0 right-0 top-0 [background-color:#00000050] text-white p-4 justify-between flex flex-col'>
        <h3 className=' text-lg font-semibold text-black hover:text-white hover:bg-black bg-white h-7 w-7 rounded-full pl-2.5'>{card.id}</h3>
        <div className="">
          <p className='text-sm p-6'>{card.description}</p>
          <button className='bg-blue-500 text-white rounded-full text-sm py-2 cursor-pointer px-6 ml-6 flex hover:bg-green-400 hover:text-black transition-all'> {card.tags}<span className='pl-5 cursor-pointer hover:animate-pulse'><ArrowRight  /></span></button>
        </div>
      </div>
    </div>
  )
}

export default Card