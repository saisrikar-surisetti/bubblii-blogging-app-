import React from 'react'
import Link from 'next/link'
import prisma from '../lib/db'
import { getCurrentUser } from '../lib/session'

const MyBlogsPage = async () => {


const user = await getCurrentUser()



 const posts = await prisma.post.findMany({
         where:{
            authorEmail: user?.email
         },
         include: {
            author: true
         }
     })
     console.log(posts)

  return (<div className='text-center'><div className='bg-purple-100  flex justify-center' >
<h1 className='text-neutral-300 p-2 w-screen mx-1 font-bold text-xl rounded-3xl bg-fuchsia-400 '>
    Blogs
  </h1>
  </div>
    <div className='grid mt-8 col-1 md:grid-flow-col gap-3'>
    {posts.map((post: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; author: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined } }) => (
        <Link key={post.id}href={`/blogs/${post.id}`} className='bg-fuchsia-50 shadow-md p-4 mb-5 rounded-lg border-4 mx-8 hover:shadow-lg hover:shadow-fuchsia-200 text-fuchsia-400 '>
        <h2 className='text-xl  font-bold'>{post.title} </h2>
        <p className='text-fuchsia-300'>Written by: {post.author?.name}</p>
        </Link>
    ))}
    
    </div>
  </div>
    
  )

}

export default MyBlogsPage