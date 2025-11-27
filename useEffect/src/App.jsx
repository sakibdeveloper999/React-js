import React, { useEffect, useState } from 'react'

const App = () => {
  const [numOne, setNumOne] = useState(0)
  const [numTow, setNumTow] = useState(0)


  useEffect(() => {
    console.log(' num one is puls ');
  }, [numOne]);

  useEffect(() => {
    console.log(' num tow is puls ');
  }, [numTow]);


  
  return (
    <div className='h-20 w-60 m-auto '>
      <h1 className='text-2xl  text-red-500 mt-10'>Num one is: {numOne}</h1>
      <h1 className='text-2xl  text-green-500 '>Num tow is: {numTow}</h1>
      <button 
      className='px-2 py-3 rounded-2xl mt-20 text-bold bg-red-500 text-white' 
      onClick={
        ()=>{setNumOne(numOne +1)}
        }>Num One
        </button>
      <button 
      className='px-2 py-3  rounded-2xl ml-2 text-bold bg-green-500 text-white' 
      onClick={
        ()=>{setNumTow(numTow +1)}
        }>Num Tow
        </button>
    </div>
  )
}

export default App