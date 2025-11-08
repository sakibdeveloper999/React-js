import React,{useState} from 'react'

const App = () => {
  const [title , setTitle ] = useState('');
  const [details, setDetails] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form submit');
    console.log(title);
    setTitle('')
    console.log(details);
    setDetails('')
  }
  
  


  return (
    <>
    <div className='h-screen lg:flex bg-black text-white' >
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start' >
        <h1 className='text-4xl mb-2 font-bold'>Add note</h1>
        {/* 1st input  */}
        <input 
        type="text" 
        placeholder='Enter Note Heading' 
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
   {/* note details */}
        <textarea 
        type="text"
        className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
        placeholder='Write your note here...'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);
        }}
        /> 
        <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded'>
          Submit
        </button>
      </form>
      <div className='lg:w-1/2 lg:flex lg:flex-col p-10 lg:border-l-2 bg-black'>
         <h1 className='text-4xl font-bold'>Recent Note</h1>
         <div className="flex flex-wrap gap-5 mt-6 h-full overflow-auto">
          <div className="h-52 w-40 rounded-xl bg-white "></div>
          <div className="h-52 w-40 rounded-xl bg-white "></div>
         </div>
      </div> 
    </div>
    </>
  )
}

export default App