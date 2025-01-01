'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { FormData } from '../types/blog';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const FormNewPost = () => {

    const [formData, setFormData] = useState<FormData>({
        title: '',
        content: '',
    }) 

    const {data} = useSession()
    const router = useRouter()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
e.preventDefault();

        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        
        })
       
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try{
            const response = await axios.post('api/posts', formData)

            if(response.status === 200){
                router.push(`/blogs/${response.data.newPost.id}`)
            }
        } catch(error){
            console.error(error);
        }
    } 

  return (
    <div className=' rounded-3xl bg-fuchsia-400 border-8  mt-10 w-5/6  md:w-1/2 mx-auto my-auto text-center shadow-2xl'>
        <h1 className='text-white font-mono text-xl mt-4'> Make a blog post bellow! </h1>
    <form className='items-center text-center' onSubmit={handleSubmit}>  
        <div >
    <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder='Enter the title' className='text-black bg-neutral-200 rounded-md px-0.5 mt-10 w-5/6'/>
        </div>
        <div className='mb-2'>
    <TextareaAutosize onChange={handleChange} value={formData.content} maxRows={11} minRows={11} name="content" placeholder="Enter the content" className='text-black px-0.5 bg-neutral-200 rounded-md mt-10 w-5/6'/>
        </div>
        
    <button type="submit" className='hover:bg-fuchsia-200  bg-white text-black text-xl rounded-md p-2 mt-1 mb-4'> POST  </button>
    </form>     
    </div>
  )
}

export default FormNewPost