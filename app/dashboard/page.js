"use client"
import React from 'react'
import { useSession,signIn,signOut } from "next-auth/react";
import {useRouter} from "next/navigation"

const Dashboard = () => {

    const {data : session} = useSession();
    const router = useRouter();
  
    if(!session){
        router.push("/");
    }
  return (
    <>
      <div className="flex justify-center items-center py-2 mt-4">
      {session && <div className="text-white font-bold text-3xl">
        Welcome {session.user.name.split(" ")[0]}
      </div>}
      </div>

      <div className="flex justify-center items-center my-4">
      <div className="flex flex-col gap-2 w-[60%]">
        <div className="text-white my-1">
          <label htmlFor="name" className="text-sm">Name</label>
          <input type="text" disabled={true} value={session && session.user.name} className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter Name" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="email" className="text-sm">Email</label>
          <input type="text" disabled={true} value={session && session.user.email} className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter Email" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="username" className="text-sm">Username</label>
          <input type="text" className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter Username" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="profile" className="text-sm">Profile Picture</label>
          <input type="text" className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter url" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="cover" className="text-sm">Cover Picture</label>
          <input type="text" className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter url" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="razorpayid" className="text-sm">Razorpay ID</label>
          <input type="text" className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter razorpay id" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="razorpaysecret" className="text-sm">Razorpay Secret</label>
          <input type="text" className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter razorpay secret" />
        </div>

        <button type="button" className="mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">
        Save
      </button>
      </div>
      </div>
      
    </>
  )
}

export default Dashboard
