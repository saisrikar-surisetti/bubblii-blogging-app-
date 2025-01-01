'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

const ButtonLogout = () => {


  return (
    <button onClick={() => signOut()} className='px-2 py-1 rounded-md text-fuchsia-400 shadow-fuchsia-500 hover:shadow-fuchsia-300 shadow-md bg-neutral-200'> Logout </button>
  )
}

export default ButtonLogout
