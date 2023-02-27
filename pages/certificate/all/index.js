import Table from '@/components/General/Table';
import { filterByEvent, filterByPrize } from '@/util/helper';
import { fetchAllData, fetchEvents, fetchSingleEvents } from '@/util/supabase.helper';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from "react";
import { useData } from 'store';

export default function All() {

  const router = useRouter()

  const {data, setdata} = useData()


  const [filtered, setfiltered] = useState([])
  const [eventFiltered, seteventFiltered] = useState([])
  const [single, setsingle] = useState([])

  const prizeRef = useRef()
  const eventRef = useRef()


  useEffect(() => {
	  fetchAllData(setdata)
	  fetchSingleEvents(setsingle)
  }, [])




  function handleSingleEventChange(e){
    eventRef.current.value = e.target.value
	filterByEvent(data, eventRef.current.value, prizeRef.current.value, seteventFiltered, setfiltered)
  }




  function handlePrizeChange(e){
    prizeRef.current.value = e.target.value
	filterByPrize(eventFiltered, eventRef.current.value, prizeRef.current.value, setfiltered)
  }
  

  return (
    <div className='flex flex-col max-w-screen'>

      <div className='w-ull flex justify-between px-4 py-2'>
        <h3>Student Details</h3>
        <div className='flex space-x-8'>
          <select className='bg-zinc-900 text-white px-4 py-2 rounded-lg' defaultValue='select' onChange={handleSingleEventChange} ref={eventRef}>
            <option value={'select'} >Select Event</option>
            {single?.map((item)=>
              <option value={item?.name} key={item?.id}>{item?.name}</option>
            )}
          </select>
          <select className='bg-zinc-900 text-white px-4 py-2 rounded-lg' defaultValue='all' onChange={handlePrizeChange} ref={prizeRef}>
            <option value='all'>All</option>
            <option value='participation'>Participation</option>
            <option value='prize'>Prize</option>
          </select>
          <button className='bg-zinc-900 text-white px-4 py-2 rounded-lg' onClick={()=> router.push('/certificate/all/demo')}>
            Show Demo 
          </button>
        </div>
      </div>

      <Table data={filtered} event={eventRef?.current?.value}/>

    </div>
  )
}

