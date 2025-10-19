import React from 'react'
import Card from './Card'
import { Tag } from 'lucide-react'

const RightContent = () => {
  const card = [
    {
      id: 1,
      title: "Card 1",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fFBST0ZJTEUlMjBQSE9UT3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      tags: "UnderServed",
    },
    {
      id: 2,
      title: "Card 2",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UFJPRklMRSUyMFBIT1RPfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      tags: "Satisfied",
    },
    {
      id: 3,
      title: "Card 3",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fFBST0ZJTEUlMjBQSE9UT3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      tags: "Dissatisfied",
    },
    {
      id: 4,
      title: "Card 4",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      image:
        "https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fFBST0ZJTEUlMjBQSE9UT3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      tags: "UnderReview",
    },
    {
      id: 5,
      title: "Card 5",
      description:
        "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
      image:
        "https://images.unsplash.com/photo-1620828096037-42687961c500?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
      tags: "InProgress",
    },
    {
      id: 6,
      title: "Card 6",
      description:
        "Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper.",
      image:
        "https://images.unsplash.com/photo-1637921884274-e12c48d7cd0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      tags: "Complete",
    },
    {
      id: 7,
      title: "Card 7",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis.",
      image:
        "https://images.unsplash.com/photo-1693746943950-fbad52308296?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      tags: "Pending",
    },
  ]
  return (
    <div className='flex overflow-x-auto flex-nowrap w-2/3 p-6 gap-4 '>
        {card.map((card) => (
          <Card id={card.id} title={card.title} description={card.description} image={card.image} tags={card.tags} />
        ))}
    </div>
  )
}

export default RightContent