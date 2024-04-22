"use client"
import Link from 'next/link'
import React from 'react'
import { useSession,signIn,signOut } from "next-auth/react";

const Navbar = () => {
  const {data : session} = useSession(); 

  return (
    <nav className='bg-gray-900 text-white flex items-center justify-between h-16 px-4 '>
        
        <Link href='/'>
        <div className="text-xl font-bold flex justify-center items-center gap-2">
            BuyMeAChai! <span><img src="/tea.gif" width={40} alt="" /></span>
        </div>
        </Link>
        
      {session && 
        <div>
          <Link href='/dashboard'>
        <button type="button"  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Dashboard
        </button>
        </Link>
        <button type="button" onClick={()=>{signOut()}} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Logout
      </button>
        </div>    
      }

      {!session && 
      <Link href='/login'>
      <button type="button"  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Login
      </button>
      </Link>}
    
    </nav>
  )
}

export default Navbar
