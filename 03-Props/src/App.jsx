import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div >

      <Card user={{ name: "John Doe", age: 30, bio: "Software Engineer", initials: "JD" }} />
      <Card user={{ name: "Md. Sakib", age: 22, bio: "Software Engineer", initials: "MS" }} />
    </div>
  )
}

export default App