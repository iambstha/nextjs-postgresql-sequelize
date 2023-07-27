import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav>
            <ul className=' flex justify-center items-center gap-8 p-4 border '>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/users/add-user'>Add User</Link></li>
                <li><Link href='/users'>Users</Link></li>
                <li><Link href='/items/add-item'>Add Item</Link></li>
                <li><Link href='/items'>Items</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav