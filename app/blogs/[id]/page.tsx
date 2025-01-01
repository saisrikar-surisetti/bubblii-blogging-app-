import React, { FC } from 'react'
import Comments from '@/app/components/comments'
import FormComment from '@/app/components/form-comment'
import prisma from '@/app/lib/db'

interface BlogDetailPageProps{
    params: {
        id: string
    }
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({params}) => {

    const post = await prisma.post.findFirst({
        where: {
            id: params.id
        },
        include: {
           author: true
        }
    })
    console.log(post)
  return (
    <div className=' justify-center grid grid-cols-1 items-center'>
         <div className=' rounded-3xl text-fuchsia-400 bg-fuchsia-50 border-8  mt-10 w-11/12 md:w-1/2 mx-auto my-auto text-center shadow-2xl'>
        <h1 className='font-bold underline text-2xl'>
            {post.title}
        </h1>
        <p className='text-fuchsia-300'>{post.author.name}</p>
        <div className='m-4 text-sm text-fuchsia-800'> {post.content}</div>
          </div >
            <div className='w-screen justify-center grid grid-cols-1'> 
            <Comments postId={params.id}/>
            <FormComment postId={params.id}/>
            </div>
          
    </div>

    
  )
}

export default BlogDetailPage