import React from 'react'
import Card from './Card'

const RightContent = () => {
  const card =[
    {
      id: 1,
      title: "Card 1",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
    },
    {
      id: 2,
      title: "Card 2",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description for Card 3",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
    },
  ]
  return (
    <div className='flex w-3/4 py-5 px-10 gap-4 '>
        {card.map((card) => (
          <Card id={card.id} title={card.title} description={card.description} image={card.image} />
        ))}
    </div>
  )
}

export default RightContent