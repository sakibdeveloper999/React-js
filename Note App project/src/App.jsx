import React, { useState } from 'react'
import { Trash2 } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({ title, details })
    setTask(copyTask)
    console.log(copyTask);
    setTitle('')
    setDetails('')
    
  }

  const noteDelete=(idx)=>{
    const dltTask = [...task];
    dltTask.splice(idx, 1);
    setTask(dltTask);
  }



  return (
    <>
      <div className='h-screen lg:flex bg-black text-white' >
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start' >
          <h1 className='text-4xl mb-2 font-bold'>Add note</h1>
          {/* 1st input  */}
          <input
            type="text"
            placeholder='Enter Note Heading'
            required
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          {/* note details */}
          <textarea
            type="text"
            className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
            placeholder='Write your note here...'
            required
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button className='bg-white active:scale-90 font-medium w-full outline-none text-black px-5 py-2 rounded'>
            Submit
          </button>
        </form>
        <div className='lg:w-1/2 lg:flex lg:flex-col p-10 lg:border-l-2 bg-black'>
          <h1 className='text-4xl font-bold'>Recent Note</h1>
          <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto">
            {task.map(function (note, idx) {

              return <div key={idx} className="relative h-52 w-40 rounded-xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black p-2">
                <div className='  gap-4 mb-2 flex flex-col items-start'>
                  <h3 className='font-bold pt-4 uppercase'>{note.title}</h3>
                  <p className='font-medium text-sm '>{note.details}</p>
                  <h2 onClick={()=>{
                    alert('Note Deleted Successfully')
                    noteDelete(idx)
                  }} ><Trash2 className='h-6 w-6 bottom-3 absolute left-16 active:scale-90 text-red-500 cursor-pointer' /></h2>
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default App