import React from 'react'
import { posts } from '../data/posts'
import Link from 'next/link'

const BlogsPage = () => {
  return (<div className='text-center'><div className='bg-neutral-300  flex justify-center' >
<h1 className='text-neutral-300 p-2 w-screen mx-1 font-bold text-xl rounded-3xl bg-fuchsia-400 '>
    Blogs
  </h1>
  </div>
    <div className='grid mt-8 col-1 md:grid-flow-col gap-3'>
    {posts.map(post => (
        <Link key={post.id}href={`/blogs/${post.id}`} className='bg-fuchsia-50 shadow-md p-4 mb-5 rounded-lg border-4 mx-8 hover:shadow-lg hover:shadow-fuchsia-200 text-fuchsia-400 '>
        <h2 className='text-xl  font-bold'>{post.title} </h2>
        <p className='text-fuchsia-300'>Written by: {post.username}</p>
        </Link>
    ))}
    
    </div>
  </div>
    
  )
}

export default BlogsPage