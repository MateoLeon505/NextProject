import { NextResponse } from "next/server";

const GET = () => {

    // return new Response("Hello world!");
    return NextResponse.json("Hello world!"); 
}

export {GET}