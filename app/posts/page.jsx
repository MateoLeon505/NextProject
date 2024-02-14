import React from 'react'

const LoadPost = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data =  await res.json()
    return data    
}

const PostPages = async () => {

    const posts = await LoadPost()
    console.log(posts);

  return (
    <div>
       <h1>Posts:</h1> 
       {posts.map((post) => (
        <div key={post.id}>
            <h2>{post.id}) {post.title}</h2>
            <p>{post.body}</p>
        </div>
       ))}
    </div>
  )
}

export default PostPages