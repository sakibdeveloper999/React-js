import React from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form submit');


  }
  return (
    <>
    <div >
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input type="text" placeholder='Title' />
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default App