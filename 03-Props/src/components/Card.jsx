import React from 'react'

const Card = ({ user }) => {

    return (
    <main className="grid">
      
        <article className="card">
          <div className="top">
            <div className="avatar">{/* You can render user.avatar or initials here */}</div>
            <div className="meta">
              <div className="profile">Profile</div>
              <div className="name">{user.name}</div>
              <div className="age">Age: {user.age}</div>
            </div>
          </div>
          <p className="bio">{user.bio}</p>
          <div className="actions">
            <button className="btn">View Profile</button>
          </div>
        </article>
    </main>
    )
}

export default Card