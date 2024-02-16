import React from 'react'
import PostCard from '@/components/postCard'

const LoadPost = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data =  await res.json()

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return data;
}

const PostPages = async () => {

    const posts = await LoadPost()

  return (
    <div>
       <h1>Posts:</h1> 
       {posts.map((post) => (
            <PostCard  key={post.id} post={post}/>
       ))}
    </div>
  )
}

export default PostPages;