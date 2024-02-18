import { NextResponse } from "next/server"

const GET = async (request, {params}) => {
    const { searchParams } = new URL(request.url)

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
    const data = await res.json()
    return NextResponse.json(data)

}

export {GET}