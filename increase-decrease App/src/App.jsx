import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center h-screen flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Count: {count}</h1>
      <button className='bg-blue-500 text-white px-4 py-2  mr-2 rounded' onClick={() => setCount(count + 1)}>Increase</button>
      <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default App