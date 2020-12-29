import React, { useState } from 'react'
import ReusableListing from './ReusableListing';
import UserCard from './UserCard';

function Users() {
    const [page, setPage] = useState(1);

    return (
        <div>
            <div className="card_heading">
                <h1>Our <span>Users</span></h1>
            </div>
            <div className="card_container">
                <section className="cards">
                  <ReusableListing url={'public-api/users?page='+page} callback={(data, index) => <UserCard user={data}  key={data.id}/>} /> 
                </section>
            </div>
            <button className ="load_btn" onClick={() => {setPage(page+1)}}>Load More</button>
        </div>
    )
}

export default Users;
