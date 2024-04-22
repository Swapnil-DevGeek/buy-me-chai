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
      {session && <div className="text-white">
        Welcome {session.user.name.split(" ")[0]}
      </div>}
      
    </>
  )
}

export default Dashboard
