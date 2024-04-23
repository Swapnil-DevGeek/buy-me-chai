"use client"
import React, { useEffect } from 'react'
import { useSession,signIn,signOut } from "next-auth/react";
import {useRouter} from "next/navigation"
import { useState } from 'react';

const Dashboard = () => {

    const {data : session} = useSession();
    const router = useRouter();
    const [form,setForm] =  useState({});

    form.email = session && session.user.email;

    useEffect(()=>{
      if(!session){
        router.push("/");
      }
    },[router,session])
    
    const handleChange = (e)=>{
        setForm({...form,[e.target.name] : e.target.value});
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
          <input type="text" name='name' id='name' value={form.name ? form.name : ""} onChange={handleChange} className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter Name" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="email" className="text-sm">Email</label>
          <input type="text" name='email' id='email'disabled={true} value={session && session.user.email} className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter Email" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="username" className="text-sm">Username</label>
          <input type="text" name='username' id='username' value={form.username ? form.username : ""} onChange={handleChange} className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter Username" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="profile" className="text-sm">Profile Picture</label>
          <input type="text" name='profile' id='profile' value={form.profile ? form.profile : ""} onChange={handleChange} className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter url" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="cover" className="text-sm">Cover Picture</label>
          <input type="text" name='cover' id='cover' value={form.cover ? form.cover : ""} onChange={handleChange}  className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter url" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="razorpayid" className="text-sm">Razorpay ID</label>
          <input type="text" name='razorpayid' id='razorpayid' value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter razorpay id" />
        </div>

        <div className="text-white my-1">
          <label htmlFor="razorpaysecret" className="text-sm">Razorpay Secret</label>
          <input type="text" name='razorpaysecret' id='razorpaysecret' value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter razorpay secret" />
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
