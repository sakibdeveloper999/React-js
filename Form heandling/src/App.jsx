import React from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div className='mt-10 ml-10'>
      <form className=''
        onSubmit={(e)=>{
          submitHandler(e)
        }
        }
      >
        <input className='bg-white h-10 p-2  ' type="text" placeholder='Enter your name' />
        <button className='bg-white p-2 ml-5 '>Submit</button>
      </form>
    </div>
  )
}

export default App