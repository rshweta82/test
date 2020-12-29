import React from 'react'

function UserCard({user}) {
    return (
          <article className="card">
            <div className="usercard-content">
                <span>Name: {user.name}</span><br/>
                <span>Email: {user.email}</span><br/>
                <span>Gender: {user.gender}</span><br/>
            </div>
          </article>
    )
}

export default UserCard;