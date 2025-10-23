import React, { useState }  from 'react'


const App = () => {
  
  const [nam, setNam] = useState('Sakib')
  const changeName = () => {
    setNam('Abon')
  }
  const [countNum, setCountNum] = useState(0)
  const counter = () => {
    setCountNum(countNum + 1)
  }
  return (
    <div className='mt-30 ml-30'>
      <h1 className='mb-10'>hy my name {nam}</h1>
      <button onClick={changeName} className='bg-black text-white p-5 cursor-pointer'>Change me</button>
      <h1 className='mt-10 text-black text-2xl'>Count {countNum}</h1>
      <button className='bg-black text-white p-5 cursor-pointer mt-2 ' onClick={counter}>Count me</button>
    </div>
  )
}

export default App