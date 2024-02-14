import React from 'react'

const loadPost = async (id) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return data
}

const Post = async (props) => {

    const id = props.params.id

    const dataPost = await loadPost(id)

    return (
        <div>
            <h2>{dataPost.id}. {dataPost.title}</h2>
            <p>{dataPost.body}</p>
            <button>OK</button>
        </div>
    )
}

export default Post