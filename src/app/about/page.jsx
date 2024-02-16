"use client"
import { useRouter } from "next/navigation"

// export const metadata = {
//     title: 'Sobre Nosotros'
// }

const About = () => {

    const router = useRouter()

    return (
        <section>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos ipsum non similique quo? Nam, aperiam animi doloribus eos aliquid ullam maiores minus ratione ea dolores, quis, quae quod. Repudiandae voluptate expedita pariatur. Quae sint similique voluptatem rem exercitationem ipsam blanditiis, molestiae dolores magni? Iste omnis necessitatibus consectetur doloribus quas, accusantium molestias doloremque ex eaque ipsam beatae recusandae provident ipsum animi alias suscipit consequatur asperiores officiis perspiciatis quos nulla! Aliquam omnis libero velit dolore atque pariatur facilis, quod numquam, ipsa doloremque, itaque quibusdam beatae? Nesciunt, eius ea cumque blanditiis vero atque sapiente repellat illum aliquam, hic error mollitia facere consequuntur!</p>
            <button className="bg-sky-600 px-3 py-2 rounded-md border border-white" 
                onClick={() => {
                    alert('Executing command')
                    router.push('/')
                }}>
                Click!
            </button>
        </section>
    )
}

export default About;