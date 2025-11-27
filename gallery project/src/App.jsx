import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)

    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading.....</h3>

  if (userData.length > 0) {

    printUserData = userData.map(function (elem, idx) {

      return <Card elem={elem} idx={idx} />
    }
    )
  }
  return (
    <div className='bg-black h-screen overflow-auto text-white p-4'>
      {/* <button
        onClick={getData}
        className='bg-green-600 px-5 py-2 rounded-2xl text-white active:scale-95 '
      >
        Get Data
      </button> */}
      <div className="flex h-[82%] flex-wrap gap-3">
        {printUserData}
      </div>


      <div className='flex justify-center items-center gap-6 p-4'>
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
        >
          Prev
        </button>
        {/* ============= */}
        <h2>Page: {index}</h2>
        <button
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>


    </div>
  )
}

export default App