"use client"
//RCC
import React from 'react'
import Link from 'next/link'

const PostCard = ({post}) => {

  return (
    <div className='bg-gray-950 p-10 '>
      <Link href={`http://localhost:3000/posts/${post.id}`}> 
        <h3 className='text -xl font-bold mb-4'>
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => {alert(`Todo OK (${post.id})`)}}>OK</button>
    </div>
  )
}

export default PostCard