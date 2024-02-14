import React from 'react'
import { Suspense } from 'react'
import PostPages from '../page'

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
            <hr />
            <h2>Otras publicaciones</h2>
            <Suspense fallback={<div>Cargando publicaciones...</div>}>
                <PostPages/>
            </Suspense>
        </div>
    )
}

export default Post