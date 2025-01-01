'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FC } from 'react'
import { useState } from 'react'

interface FormCommentsProps{
    postId: string
}

const FormComment: FC<FormCommentsProps> = ({postId}) => {
    const [comment, setComment] = useState<string>('');
    const router = useRouter()
    const { data } = useSession()

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault();
        setComment(e.target.value);

    }

    const handleSubmitComment = async () => {
        if(comment.trim() !== '') {
            try {
                const newComment = await axios.post('/api/comments', {
                    postId, text: comment,
                })
                if(newComment.status === 200){
                    router.refresh()
                }
            } catch(error){
                console.error(error)
            }
        }
        setComment('');
    }

  return (
    <div className='items-center justify-center  flex'> 
    <div className='my-4  w-11/12 md:w-10/12 p-2 rounded-2xl mx-2'>
        <label htmlFor='comment' className='text-fuchsia-400 text-xs mb-2'>Add Comment</label>
    <input onChange={handleCommentChange} value={comment} name="comment" type='text' className=' text-gray-400 text-sm w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'/>
    <button 
    disabled={!data?.user?.email}
    onClick={handleSubmitComment} className='border  rounded-md mt-1 px-2 bg-fuchsia-400 hover:bg-fuchsia-300 text-white'>Submit comment</button>
    </div>
    </div>
  )
}

export default FormComment