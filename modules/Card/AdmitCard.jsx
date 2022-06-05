import Spinner from '@/components/General/Spinner'
import { getAccessToken, getEventSchedule } from '@/util/prismic.helper'
import {useState} from 'react'
import { MdNavigateNext } from "react-icons/md"

export default function AdmitCard({data}) {

  const [loading, setloading] = useState(false)
  const [scheduleData, setscheduleData] = useState([])
  console.log(data);

  const viewSchedule = async () => {
    const ref = await getAccessToken()
    let temp = []
    for (let i = 0; i < data.Event.length; i++) {
      const element = data.Event[i];
      await getEventSchedule(ref, element, setloading, temp)
    }
    setscheduleData(temp)
  }

  // console.log(scheduleData);
  return (
    <div className=' flex flex-col space-y-2 pt-4'>
      <div className='flex flex-col space-y-1'>
        <h5>Hi {data.Name} </h5>
        <h6> You have registered for the following events :&nbsp;  </h6>
        <ul className='list-disc pl-8'>
          {data.Event.map((item)=>
            <li>
              {item}
            </li>
          )}
        </ul>
      </div>
      <div className='flex flex-col items-start space-y-4'>
        <button className='flex relative justify-center items-center text-green-500 text-lg animate-bounce' onClick={viewSchedule}>
          View Schedule  <MdNavigateNext className='w-6 h-6' />
        </button>
        {scheduleData.length != 0 && 
        <div className='flex flex-col space-y-4'>
          <table className='table-fixed w-full'>
            <thead className='border'>
              <tr className='border'>
                <th>
                  Event Name
                </th>
                <th>
                  Time
                </th>
                <th>
                  Stage
                </th>
              </tr>
            </thead>
            <tbody className='border'>
              
              {scheduleData.map((item)=> 
                <tr>
                  {item.map((text)=>
                    <td>
                      {text.text}
                    </td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
            {data?.Remarks && 
              <div className='bg-green-500 py-2 px-2 text-black'>
                <h5>Remarks</h5>
                <p>{`${data.Remarks}`}</p>
              </div>}
          </div>}
        </div>
    </div>
  )
}
