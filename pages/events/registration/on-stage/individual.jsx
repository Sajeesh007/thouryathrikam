import { useState, useEffect  } from 'react'

import { getAccessToken, getEvents } from '@/util/prismic.helper'

import green from '../../../../public/green.png'
import green_small from '../../../../public/green-small.png'
import { BsChevronDoubleDown } from "react-icons/bs"

import Layout from '@/components/Layout/Layout'
import Portal from '@/components/Layout/Portal'
import OnStageEvents from '@/modules/Events/OnStageEvents'
import PersonalDetails from '@/modules/Events/PersonalDetails'
import OnStageOverlay from '@/components/Layout/OnStageOverlay'


export default function OnStageIndividualRegistration() {

  const style = {
    backgroundImage: `url(${green.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-y',
    zIndex: '0'
  }

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
    <div className="flex flex-col items-center px-3">
      {!click ? (
        <div className="flex flex-col items-center w-screen h-screen fixed px-3" style={style}>
          <h1 className='text-left py-60 text-white'>On Stage <br/> Events Registartion</h1>
          <div className='flex justify-center items-center bg-white w-14 h-14 rounded-full absolute bottom-20 animate-bounce'>
            <BsChevronDoubleDown onClick={handleClick}/>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col items-center w-screen h-screen pt-56 ${portalOpen &&  'filter blur-lg'}`} style={style1}>
          {showEvents ?
            <OnStageEvents eventData={eventData} setformData={setformData} formData={formData} setportalOpen={setportalOpen}/> :
            <PersonalDetails setformData={setformData} setshowEvents={setshowEvents} color='green'/>
          }
        </div>
      )}

      {portalOpen && <Portal>
        <OnStageOverlay color='green' values={formData}/>
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
