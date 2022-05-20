import { useRouter } from 'next/router'
import { useState } from 'react'

import { submitForm } from '@/util/api.helper'
import Spinner from '../General/Spinner'

export default function OnStageOverlay({color, values}) {

  const router = useRouter()

  const [message, setmessage] = useState('')
  const [loading, setloading] = useState(false)

  const handleClick = () => {
    submitForm(values, setmessage, setloading)
  }

  return (
    <div className={`flex justify-center items-center w-11/12 h-60 border   
      absolute z-50 inset-0 rounded-lg shadow-lg  m-auto px-8 
      ${color == 'blue' ? 'shadow-blue-300 border-blue-600' : 'shadow-green-200 border-green-500'}`}>

      {message ? 
        <div className='flex flex-col justify-center items-center space-y-4'>
          <h3 className='text-center'>{message}</h3>
          <button className={` flex justify-center items-center space-x-3 w-28 py-2 rounded-md text-white ${color == 'blue' ? 'bg-blue-600' : 'bg-green-500'}`} 
            onClick={()=>router.push('/')}> 
            Continue
          </button>
        </div> : 
        <div className='flex flex-col justify-center items-center space-y-3'>
          <h3 className='text-center'>You will be registered for the following events</h3>
          {/* events list  */}
          <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
              <h5>Event 1 : &nbsp;</h5>
              <p>{values.on_stage_event_1}</p>
            </div>
            { values.on_stage_event_2 && <div className='flex justify-center items-center'>
              <h5>Event 2 : &nbsp;</h5>
              <p>{values.off_stage_event_2}</p>
            </div>}
            {values.on_stage_event_3 && <div className='flex justify-center items-center'>
              <h5>Event 3 : &nbsp;</h5>
              <p>{values.off_stage_event_3}</p>
            </div>}
          </div>

          <p>Are you sure want to submit</p>
          <button className={` flex justify-center items-center space-x-3 w-28 py-2 rounded-md text-white ${color == 'blue' ? 'bg-blue-600' : 'bg-green-500'}`} onClick={handleClick}> 
            {loading && <Spinner/> } <p className='font-semibold'>Submit</p>
          </button>
        </div>} 
    </div>
  )
}
