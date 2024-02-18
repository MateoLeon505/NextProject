import { NextResponse } from "next/server";

const API_KEY = process.env.API_KEY
const URL = `https://jsonplaceholder.typicode.com/users/${API_KEY}`
const SECRET_KEY = process.env.SECRET_KEY
console.log(SECRET_KEY);

const GET = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return NextResponse.json(data) 
    // return NextResponse.json({
    //     message: "Obtener data!",
    //     status: '202'
    // }); 
}

const POST = async (request) => {
    const data = await request.json()
    return NextResponse.json(data)
}

const PUT = () => {
    return NextResponse.json({
        message: "Actualizar data!",
        status: '202'
    }); 
}

const DELETE = () => {
    return NextResponse.json({
        message: "Eliminar data!",
        status: '202'
    }); 
}

export {GET, POST, PUT, DELETE}