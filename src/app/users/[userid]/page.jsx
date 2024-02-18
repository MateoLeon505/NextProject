"use client"
import React from 'react'
import { useParams } from 'next/navigation';

function UserPage() {

    const params = useParams()

  return (
    <div>
        <button onClick={console.log("works!!")}>Click</button>
    </div>
  )
}

export default UserPage