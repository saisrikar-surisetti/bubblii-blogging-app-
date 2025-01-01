import React from 'react'
import { getCurrentUser } from '../lib/session'
import Link from 'next/link'
import ButtonLogout from './logout'

const LogButton = async () => {

      const user = await getCurrentUser()
      
  return (
    <>
    <li>
        {!user?.name ? ( <Link href='/api/auth/signin'
         className='px-2 py-1 rounded-md text-fuchsia-400 shadow-fuchsia-500 hover:shadow-fuchsia-300 shadow-md bg-neutral-200'> Login
         </Link>) : (<ButtonLogout/>)}
        
     </li>
    
     </>
        
  )
}

export default LogButton