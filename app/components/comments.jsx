import React, { FC } from 'react'
import prisma from '../lib/db'
import { format } from 'date-fns'




const Comments = async ({postId}) => {
    const comments = await prisma.comment.findMany({
        where:{
            postId,
        },
        include: {
           author: true
        }
    })


  return (
    <div className='mt-8 justify-center grid grid-cols-1 '>  
    <h2 className= 'font-bold text-center bg-fuchsia-300 rounded-3xl  text-neutral-300 mx-1'> Comments </h2>
    <div className='justify-center grid grid-cols-1'> 
    <ul>
        {comments.map( (comment) => (
            <div key={comment.id} className='items-center justify-center flex'> 
            <li className='my-4  w-11/12 md:w-10/12 bg-white p-2 rounded-xl mx-2'>
            <div> 
            <div className='text-fuchsia-300'>
               {comment.author?.name}
            </div>
            <div className='text-xs text-gray-300'>{format(comment.createdAt, 'MMMM d, yyyy')}  </div>
            <div className='text-gray-400 text-xs'>{comment.text} </div>
            </div>
            
            </li>
            </div>
     
        ))}
    </ul>
    </div>
    
    </div>
  )
}

export default Comments 