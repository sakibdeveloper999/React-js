import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4'>
      <h1 className='text-3xl font-bold flex  '>Counter App</h1>
      <p className='text-lg'>Welcome to the Counter App!</p>
      <h3 className='text-2xl'>{count}</h3>
      <button onClick={increment} className='bg-blue-500 text-white px-4 py-2 rounded'>Increment</button>
    </div>
  )
}

export default App