'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

const ButtonLogout = () => {


  return (
    <button onClick={() => signOut()} className=' py-0.5 rounded-3xl text-fuchsia-400 px-2 shadow-fuchsia-500 hover:shadow-fuchsia-300 shadow-md bg-purple-50'> Logout </button>
  )
}

export default ButtonLogout
