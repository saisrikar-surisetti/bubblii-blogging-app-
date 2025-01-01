import React from 'react'
import Link from 'next/link'
import { getCurrentUser } from '../lib/session'
import Menu from './menu'
import LogButton from './logbutton'

const Header = async () => {
    const user = await getCurrentUser()
    
  return (
    <header className='bg-neutral-300 h-18 p-4 pt-8'>
        <nav className='flex justify-between items-center mx-auto'>
        <h1 className='font-mono text-fuchsia-400 text-2xl rounded-md hover:cursor-pointer hover:text-fuchsia-500 font-bold px-3'>
            Bubblii
        </h1>
        <ul className=' px-4 space-x-4 hidden sm:flex'>

        <li>
            <Link href="/create-blog" className=' px-2 py-1 rounded-md text-fuchsia-400  shadow-fuchsia-500 hover:shadow-fuchsia-300  bg-neutral-200 shadow-md'>
        Create blog
        </Link>
            </li>
            <li>
            <Link href="/my-blogs" className=' px-2 py-1 rounded-md text-fuchsia-400  shadow-fuchsia-500 hover:shadow-fuchsia-300  bg-neutral-200 shadow-md'>
        My blogs
        </Link>
            </li>
        <li>
                <Link href='/blogs'
                className='px-2 py-1 rounded-md text-fuchsia-400  shadow-fuchsia-500 hover:shadow-fuchsia-300 shadow-md bg-neutral-200'> Blogs
                </Link>
            </li>
            

        </ul>
        <Menu/>
        </nav>
        <div className='ml-3 mt-2'>
        <LogButton/>
        </div>
    </header>
  )
}

export default Header