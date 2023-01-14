import { fetchAllData } from '@/util/supabase.helper';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useData } from 'store';

export default function All() {

  const {data, setdata} = useData()

  useEffect(() => {
    fetchAllData(setdata)
  }, [])
  
  const router = useRouter()

  return (
    <div className='flex flex-col'>
      <h3>Student Details</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Dept.</th>
            <th>Cert.</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index)=>
            <tr key={item.Email}>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.dept}</td>
              <td className='flex flex-col pl-6'>
                <ul className='list-disc'>
                {item.event_1 && <li className='underline text-green-500 cursor-pointer hover:text-black' onClick={()=>router.push('/certificate/view/'+index.toString()+ '/' + '1')}>{item.event_1}</li>}
                {item.event_2 && <li className='underline text-green-500 cursor-pointer hover:text-black' onClick={()=>router.push('/certificate/view/'+index.toString()+ '/' + '2')}>{item.event_2}</li>}
                {item.event_3 && <li className='underline text-green-500 cursor-pointer hover:text-black' onClick={()=>router.push('/certificate/view/'+index.toString()+ '/' + '3')}>{item.event_3}</li>}
                {item.event_4 && <li className='underline text-green-500 cursor-pointer hover:text-black' onClick={()=>router.push('/certificate/view/'+index.toString()+ '/' + '4')}>{item.event_4}</li>}
                {item.event_5 && <li className='underline text-green-500 cursor-pointer hover:text-black' onClick={()=>router.push('/certificate/view/'+index.toString()+ '/' + '5')}>{item.event_5}</li>}
                {item.event_6 && <li className='underline text-green-500 cursor-pointer hover:text-black' onClick={()=>router.push('/certificate/view/'+index.toString()+ '/' + '6')}>{item.event_6}</li>}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>


    </div>
  )
}
