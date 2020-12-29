import React, { useState } from 'react'
import ReusableListing from './ReusableListing';

const PostCard = ({post}) => (<article className="card" key={post.user_id}>
                    <div className="card-content">
                      <h4>{post.title}</h4>
                      <p>{post.body}</p>
                   </div>
                  </article>);

function Posts() {
    const [page, setPage] = useState(1);

    return (
        <div>
            <div className="card_heading">
                <h1>Our <span>Posts</span></h1>
            </div>
            <div className="card_container">
            <section className="cards">
                <ReusableListing url={'public-api/posts?page='+page} callback={(data, index) => <PostCard post={data} key={data.id}/>} /> 
            </section>
            </div>
            <button className ="load_btn" onClick={() => {setPage(page+1)}}>Load More</button>
        </div>
    )
}

export default Posts;