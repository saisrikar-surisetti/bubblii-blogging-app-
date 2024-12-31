import React from 'react'

const Comments  = () => {
  return (
    <div className='mt-8 justify-center grid grid-cols-1 '>  
    <h2 className= 'font-bold text-center bg-fuchsia-300 rounded-3xl  text-neutral-300 mx-1'> Comments </h2>
    <div className='justify-center grid grid-cols-1'> 
    <ul>
        <div className='items-center justify-center flex'> 
             <li className='my-4  w-11/12 md:w-10/12 bg-white p-2 rounded-2xl mx-2'>
             <div> 
             <div className='text-fuchsia-300'>
                John doe
             </div>
             <div className='text-xs text-gray-300'> Nov 23, 2023 </div>
             <div className='text-gray-400 text-xs'> Woah nice bro!</div>
             </div>
             
             </li>
             </div>
      
    </ul>
    </div>
    
    </div>
  )
}

export default Comments 