import { useState, useEffect  } from 'react'

import { getAccessToken, getEvents } from '@/util/prismic.helper'

import bg from '@/public/tribal_bg_3.webp'
import green_small from '@/public/green-small.png'
import { BsChevronDoubleDown } from "react-icons/bs"

import Layout from '@/components/Layout/Layout'
import Portal from '@/components/Layout/Portal'
import OnStageEvents from '@/modules/Events/OnStageEvents'
import PersonalDetails from '@/modules/Events/PersonalDetails'
import OnStageOverlay from '@/components/Layout/OnStageOverlay'


export default function OnStageIndividualRegistration() {

  const style1 = {
    backgroundImage: `url(${green_small.src})`,
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
    await getEvents(ref, 'on_stage_events', seteventData)
  }


  const handleClick = ()=> {
    setclick(!click)
  }

  return (
    <div className="flex flex-col items-center px-3 font-man">
      {!click ? (
        <div className="flex flex-col items-center w-screen h-screen relative" >
          <img src={bg.src} alt="bg" className="object-cover absolute -top-20 z-0 brightness-75 contrast-125" />
          <h2 className='text-center absolute -bottom-20 text-zinc-100 z-20 '>On Stage Individual Events Registartion</h2>
          <div className='flex justify-center items-center z-20 bg-white w-14 h-14 rounded-full absolute -bottom-40 animate-bounce'>
            <BsChevronDoubleDown onClick={handleClick}/>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col items-center w-screen h-screen font-sans pt-56 ${portalOpen &&  'filter blur-lg'}`} style={style1}>
          {showEvents ?
            <OnStageEvents eventData={eventData} setformData={setformData} formData={formData} setportalOpen={setportalOpen}/> :
            <PersonalDetails setformData={setformData} setshowEvents={setshowEvents} color='green'/>
          }
        </div>
      )}

      {portalOpen && <Portal>
        <OnStageOverlay color='green' values={formData} setportalOpen={setportalOpen}/>
      </Portal>}
     
    </div>
  )
}

OnStageIndividualRegistration.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
