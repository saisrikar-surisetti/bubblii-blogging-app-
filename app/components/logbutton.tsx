import React from 'react'
import { getCurrentUser } from '../lib/session'
import Link from 'next/link'
import ButtonLogout from './logout'

const LogButton = async () => {

      const user = await getCurrentUser()
      
  return (
    <>
    <div>
        {!user?.name ? ( <Link href='/api/auth/signin'
         className='px-2 py-1 rounded-3xl text-fuchsia-400 shadow-fuchsia-500 hover:shadow-fuchsia-300 shadow-md bg-purple-50'> Login
         </Link>) : (<ButtonLogout/>)}
        
     </div>
    
     </>
        
  )
}

export default LogButton