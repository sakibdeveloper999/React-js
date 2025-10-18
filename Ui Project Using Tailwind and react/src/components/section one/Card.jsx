import React from 'react'


const Card = () => {
  return (
    <div className='  bg-gray-600 rounded-2xl h-full w-80 relative overflow-hidden '>
        <img className='rounded-lg h-full w-full object-cover ' src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400' alt="" />

        <div className='absolute bottom-0 left-0 right-0 top-0 [background-color:#00000050] text-white p-4'>
          <h3 className='text-lg font-bold'>Card Title</h3>
          <p className='text-sm'>Card description goes here.</p>
        </div>
    </div>
  )
}

export default Card