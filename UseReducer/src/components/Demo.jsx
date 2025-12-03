import React, { useState } from 'react'

const Demo = () => {
    const [num, setNum] = useState(0)

    const increment =()=>{
        setNum(num +1)
    }
    const decrement=()=>{
        setNum ( num - 1)
    }

  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{num}</span>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Demo