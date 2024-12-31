import React from 'react'
import Comments from '@/app/components/comments'
import FormComment from '@/app/components/form-comment'

const BlogDetailPage = () => {
  return (
    <div className='bg-neutral-300 justify-center grid grid-cols-1 items-center'>
         <div className=' rounded-3xl text-fuchsia-400 bg-fuchsia-50 border-8  mt-10    md:w-1/2 mx-auto my-auto text-center shadow-2xl'>
        <h1 className='font-bold underline text-2xl'>
            Post one
        </h1>
        <p className='text-fuchsia-200'>Written by: John doe</p>
        <div className='m-4 text-sm text-fuchsia-800'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab odit vero maxime quod modi magni commodi distinctio quia, doloremque sit recusandae fugiat, facere fugit velit libero quasi. Molestiae, rerum!</div>
          </div >
            <div className='w-screen justify-center grid grid-cols-1'> 
            <Comments/>
            <FormComment/>
            </div>
          
    </div>

    
  )
}

export default BlogDetailPage