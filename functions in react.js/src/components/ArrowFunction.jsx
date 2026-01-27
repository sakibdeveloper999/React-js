import React from 'react'

const ArrowFunction = () => {
  return (
    <div className="p-4 m-4 border rounded bg-yellow-100 text-center">
      <h2 className="text-xl font-bold">Arrow Function উদাহরণ</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert("Welcome Back, Sakib!")}>
        Say Hi 👋
      </button>
    </div>
  )
}

export default ArrowFunction