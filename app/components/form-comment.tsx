'use client'
import React, { ChangeEvent } from 'react'
import { useState } from 'react'

const FormComment = () => {
    const [comment, setComment] = useState<string>('');

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault();
        setComment(e.target.value);

    }

    const handleSubmitComment = () => {
        console.log(comment)
        setComment('');
    }

  return (
    <div className='items-center justify-center  flex'> 
    <div className='my-4  w-11/12 md:w-10/12 p-2 rounded-2xl mx-2'>
        <label htmlFor='comment' className='text-fuchsia-400 text-xs mb-2'>Add Comment</label>
    <input onChange={handleCommentChange} value={comment}name="comment" type='text' className=' text-gray-400 text-sm w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'/>
    <button onClick={handleSubmitComment} className='border  rounded-md mt-1 px-2 bg-fuchsia-400 hover:bg-fuchsia-300 text-white'>Submit comment</button>
    </div>
    </div>
  )
}

export default FormComment