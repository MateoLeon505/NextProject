"use client"
import { useEffect } from "react"
import Users from "../components/users"

const HomePage = () => {
    return (
        <section>
            <h1>Hola</h1>
            {window.localStorage.getItem('token')}
            <button onClick={()=>{alert("Holaaa!")}}>Click</button>
            <Users/>
        </section>
    )
}

export default HomePage;