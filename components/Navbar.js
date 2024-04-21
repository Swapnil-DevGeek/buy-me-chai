import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex items-center justify-between h-12 px-4 '>
        <div className="logo font-bold">
            BuyMeAChai!
        </div>
        <ul className='flex gap-4 items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar
