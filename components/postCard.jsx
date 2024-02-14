"use client"
//RCC
import React from 'react'
import Link from 'next/link'

const PostCard = ({post}) => {

  return (
    <div>
        <h2>{post.id}. <Link href={`http://localhost:3000/posts/${post.id}`}>{post.title}</Link></h2>
        <p>{post.body}</p>
        <button onClick={() => {alert(`Todo OK (${post.id})`)}}>OK</button>
    </div>
  )
}

export default PostCard