import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault();
    // alert("Form Submitted")
    console.log('Form submitted by :', name);
  }
  return (
    <>
      <div className='h-50 m-10 w-100 border-{2px} border-red-500  bg-amber-200 p-5 '>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
         className='justify-center items-center border-2 border-red-500 bg-amber-200 p-5'>
          <h1 className='text-2xl font-bold mb-3'>Two-Way Data Binding by</h1>
          <p className='mt-2'>{name}</p>
          <input 
            className='bg-black text-white p-3' 
            type="text " 
            placeholder='Enter your name'
            value={name}
            onChange={(e)=>{
              setName(e.target.value);
              console.log(e.target.value);
              console.log();
            }}
          />
          <button className='ml-2 p-3 bg-black text-white '>Submit</button>
        </form>
      </div>
    </>

  )
}

export default App