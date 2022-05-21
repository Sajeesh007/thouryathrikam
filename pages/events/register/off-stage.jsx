import { useState, useEffect } from 'react'

import { getAccessToken, getEvents } from '@/util/prismic.helper'

import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs"
import bg from '../../../public/tribal_bg_2.webp'
import blue_small from '../../../public/blue-small.png'

import Portal from '@/components/Layout/Portal'
import Layout from '@/components/Layout/Layout'
import PersonalDetails from '@/modules/Events/PersonalDetails'
import OffStageEvents from '@/modules/Events/OffStageEvents'
import OffStageOverlay from '@/components/Layout/OffStageOverlay'



export default function OffStageRegistration() {

  const style1 = {
    backgroundImage: `url(${blue_small.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-y',
    zIndex: '0'
  }

  const [click, setclick] = useState(false)
  const [eventData, seteventData] = useState([])
  const [formData, setformData] = useState([])
  const [portalOpen, setportalOpen] = useState(false)
  const [showEvents, setshowEvents] = useState(false)


  useEffect(() => {
    getEventsData()
  }, [])

  const getEventsData = async () => {
    const ref = await getAccessToken()
    await getEvents(ref, 'off_stage_events', seteventData)
  }


  const handleClick = ()=> {
    setclick(!click)
  }

  return (
    <div className="flex flex-col items-center px-3 font-man">
      {!click ? (
        <div className="flex flex-col items-center w-screen h-screen relative "  >
          <img src={bg.src} alt="bg" className="object-cover absolute -top-20 z-0 brightness-75 contrast-125" />
          <h2 className='text-center absolute -bottom-20 text-zinc-100 z-20 '>Off Stage Events Registartion</h2>
          <div className='flex justify-center items-center z-20 bg-white w-14 h-14 rounded-full absolute -bottom-40 animate-bounce'>
            <BsChevronDoubleDown onClick={handleClick}/>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col font-sans items-center w-screen h-screen pt-56 ${portalOpen &&  'filter blur-lg'}`} style={style1} >
          {showEvents ?
            <OffStageEvents eventData={eventData} setformData={setformData} formData={formData} setportalOpen={setportalOpen}/> :
            <PersonalDetails setformData={setformData} setshowEvents={setshowEvents} color='blue'/>
          }
        </div>
      )}

      {portalOpen && <Portal>
        <OffStageOverlay color='blue' values={formData} setportalOpen={setportalOpen}/>
      </Portal>}
     
    </div>
  )
}

OffStageRegistration.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
