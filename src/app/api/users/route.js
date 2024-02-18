import { NextResponse } from "next/server";

const GET = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return NextResponse.json(data) 
    // return NextResponse.json({
    //     message: "Obtener data!",
    //     status: '202'
    // }); 
}

const POST = () => {
    return NextResponse.json({
        message: "Crear data!",
        status: '202'
    }); 
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