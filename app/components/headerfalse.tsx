import React from 'react'
import Link from 'next/link'
import LogButton from './logbutton'
import Menufalse from './menufalse'

const Headerfalse = async () => {
    
  return (
    <header className=' h-18 p-4 pt-8'>
        <nav className='flex justify-between items-center mx-auto'>
        <Link href={'/'}> <h1 className='font-mono text-fuchsia-400 text-2xl rounded-md hover:cursor-pointer hover:text-fuchsia-500 font-bold px-3'>
            Bubblii
        </h1>
         </Link>
        <ul className=' px-4 space-x-4 hidden sm:flex'>

        
        <li>
                <Link href='/blogs'
                className='px-2 py-1 rounded-md text-fuchsia-400  shadow-fuchsia-500 hover:shadow-fuchsia-300 shadow-md bg-neutral-200'> Blogs
                </Link>
            </li>
            

        </ul>
        <Menufalse/>
        </nav>
        <div className='ml-3 mt-2'>
        <LogButton/>
        </div>
    </header>
  )
}

export default Headerfalse