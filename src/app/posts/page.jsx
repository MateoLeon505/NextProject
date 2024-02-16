import React from 'react'
import PostCard from '@/components/postCard'
import './posts.css'

const LoadPost = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data =  await res.json()

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return data;
}

const PostPages = async () => {

    const posts = await LoadPost()

  return (
    <div className='grid'>
       {posts.map((post) => (
            <PostCard  key={post.id} post={post}/>
       ))}
    </div>
  )
}

export default PostPages;