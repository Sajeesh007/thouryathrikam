import { useRouter } from 'next/router'
import React from 'react'

export default function Overlay({message, color}) {

  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div className={`flex flex-col justify-center items-center space-y-3 w-11/12 h-32 border   
      absolute z-50 inset-0 rounded-lg shadow-lg  m-auto px-8 
      ${color == 'blue' ? 'shadow-blue-300 border-blue-600' : 'shadow-green-200 border-green-500'}`}>
      <h6 className='text-center'>{message}</h6>
      <button className={` px-4 py-2 rounded-md text-white ${color == 'blue' ? 'bg-blue-600' : 'bg-green-500'}`} onClick={handleClick}> Continue </button>
    </div>
  )
}
