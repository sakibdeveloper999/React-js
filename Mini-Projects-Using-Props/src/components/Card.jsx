import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (cards) => {
  return (
    <div className="">
      <div className='card'>
        <div className="top">
          <img
            src={cards.brandLogo} alt="logo"
          />
          <button>Save <Bookmark size={15} /></button>
        </div>
        <div className="center">
          <h3>{cards.company} <span> {cards.datePosted}</span></h3>
          <h2>{cards.post}</h2>
          <div className="tags">
            <h4>{cards.tag1}</h4>
            <h4>{cards.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{cards.pay}</h3>
            <p>{cards.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card