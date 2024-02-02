import React from 'react'
import Link from 'next/link'

const ShoppingLayout = ({children}) => {
  return (
    <>
        <h3>NavBar of shopping</h3>
        <ul>
          <li>
            <Link href="/shopping">Home</Link>
          </li>
          <li>
            <Link href="/shopping/categories">Categories</Link>
          </li>
          <li>
            <Link href="/shopping/sellings">Sellings</Link>
          </li>
        </ul>
        {children}
    </>
  )
}

export default ShoppingLayout