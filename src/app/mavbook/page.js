import React from 'react'
import "./style.css"

const page = () => {
  return (
    <div className='flex justify-center items-center  flex-col'>
      <div>
        <div className='w-[300px] rounded-t-xl h-[200px] bg-blue-400 mt-32 p-2'>
           <div className='w-full h-full bg-pink-300'></div>
        </div>
        <div className='w-full bg-slate-600 h-[10px] flex justify-center items-center'>
            <p className='text-[10px] text-white font-semibold '>MacBook Air</p>
        </div>
      </div>
        <div className='bg-blue-400 w-[320px] h-[50px] '></div>
    </div>
  )
}

export default page
