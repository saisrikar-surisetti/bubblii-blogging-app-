'use client'
import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Header = () => {

    const[mmenu,setMenu]= useState(false)
    const handleNav = () => {
        setMenu(!mmenu);
    }   

  return (
    <header className='bg-neutral-300 h-18 p-4 pt-8'>
        <nav className='flex justify-between items-center mx-auto'>
        <h1 className='font-mono text-fuchsia-400 text-2xl rounded-md hover:cursor-pointer hover:text-fuchsia-500 font-bold px-3'>
            Bubblii
        </h1>
        <ul className=' px-4 space-x-4 hidden sm:flex'>

        <li>
            <Link href="/create-blog" className=' px-2 rounded-md text-fuchsia-400  shadow-fuchsia-500 hover:shadow-fuchsia-300  bg-neutral-200 shadow-md'>
        Create blog
        </Link>
            </li>
            <li>
            <Link href="/my-blogs" className=' px-2 rounded-md text-fuchsia-400  shadow-fuchsia-500 hover:shadow-fuchsia-300  bg-neutral-200 shadow-md'>
        My blogs
        </Link>
            </li>
        <li>
                <Link href='/blogs'
                className='px-2 rounded-md text-fuchsia-400  shadow-fuchsia-500 hover:shadow-fuchsia-300 shadow-md bg-neutral-200'> Blogs
                </Link>
            </li>
            <li>
                <Link href='/api/auth/signin'
                className='px-2  rounded-md text-fuchsia-400 shadow-fuchsia-500 hover:shadow-fuchsia-300 shadow-md bg-neutral-200'> Login
                </Link>
            </li>

        </ul>
        <div  onClick={handleNav} className="md:hidden mr-4 text-fuchsia-400 cursor-pointer pl-24">
                <AiOutlineMenu size={25}/>
            </div>
        
        <div className={
            mmenu ? "fixed left-0 top-0 w-full sm:hidden h-screen  bg-neutral-300 p-10 " :
            "fixed left-[-100%] top-0 w-full sm:hidden h-screen  bg-neutral-300  p-10 " 
        }>
            <Link  href={'/'}> 
                    <h1   onClick={() => setMenu(false)} className='font-mono  text-fuchsia-400 text-2xl rounded-md hover:cursor-pointer hover:text-fuchsia-500 font-bold px-3'>
                 Bubblii
                 </h1>
                    </Link>

            
            <div className="flex w-full items-center justify-end">
                
                <div onClick={handleNav} className=" text-fuchsia-400 cursor-pointer pl-24">
                    <AiOutlineClose size={25}/>
                </div>  
              </div>
              <div className="flex-col py-4">
                <ul>

                <Link href="/create-blog">
                <li onClick={() => setMenu(false)}
                    className="mb-12 max-w-24 text-center px-2 rounded-full text-fuchsia-400  hover:text-black  bg-neutral-200 shadow-fuchsia-200 shadow-md"> Create blog

                </li>
                </Link>

                <Link href="/my-blogs">
                <li onClick={() => setMenu(false)}
                    className="mb-12 max-w-24 text-center px-2 rounded-full text-fuchsia-400  hover:text-black  bg-neutral-200 shadow-fuchsia-200 shadow-md"> My blogs

                </li>
                </Link>
                <Link href="/blogs">
                <li onClick={() => setMenu(false)}
                    className=" my-12 max-w-24 text-center  px-2 rounded-full text-fuchsia-400  hover:text-black  bg-neutral-200   shadow-fuchsia-200 shadow-md"> Blogs

                </li>
                </Link>
                <Link href="/api/auth/signin">
                <li onClick={() => setMenu(false)}
                    className=" my-12 max-w-24 text-center  px-2 rounded-full text-fuchsia-400  hover:text-black  bg-neutral-200  shadow-fuchsia-200 shadow-md"> Login

                </li>
                </Link>
        
        
                </ul>

               
              </div>
            
             

        </div>
        </nav>
    </header>
  )
}

export default Header