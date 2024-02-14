"use client"
//RCC
import React from 'react'

const PostCard = ({post}) => {

  return (
    <div>
        <h2>{post.id}. {post.title}</h2>
        <p>{post.body}</p>
        <button onClick={() => {alert(`Todo OK (${post.id})`)}}>OK</button>
    </div>
  )
}

export default PostCard