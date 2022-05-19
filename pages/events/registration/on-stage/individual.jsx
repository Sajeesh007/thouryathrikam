import { useState, useEffect  } from 'react'
import axios from 'axios'

import { getAccessToken, getEvents } from '@/util/prismic.helper'
import { course, department, year } from '@/util/constants'

import Input from '@/components/Form/Input'
import Select from '@/components/Form/Select'
import Layout from '@/components/Layout/Layout'
import { useForm } from 'react-hook-form'
import green from '../../../../public/green.png'
import green_small from '../../../../public/green-small.png'
import { BsChevronDoubleDown } from "react-icons/bs"
import Spinner from '@/components/General/Spinner'
import Portal from '@/components/Layout/Portal'
import Overlay from '@/components/Layout/Overlay'


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

  const { register,formState : { errors },handleSubmit} = useForm()

  const [click, setclick] = useState(false)
  const [eventData, seteventData] = useState([])
  const [message, setmessage] = useState('')
  const [loading, setloading] = useState(false)
  const [addEvent, setaddEvent] = useState(0)
  const [portalOpen, setportalOpen] = useState(false)

  useEffect(() => {
    getEventsData()
  }, [])

  const getEventsData = async () => {
    const ref = await getAccessToken()
    await getEvents(ref, 'on_stage_events', seteventData)
  }

  const onSubmit = async (data) => {
    data.type = 'onstage'
    setloading(true)
    await axios.post('/api/form',{
      data : data,
      headers: { 'Content-Type':'multipart/form-data' }
    }).then(res => {
      setmessage(res.data.message)
      setportalOpen(true)
    }).catch(err => {
      setmessage(err.message)
      setportalOpen(true)
    }).finally(() =>
      setloading(false)
    )
  } 

  const handleClick = ()=> {
    setclick(true)
  }

  const addMoreEvents = () => {
    setaddEvent(addEvent + 1)
  }


  return (
    <div className="flex flex-col items-center px-3">
      {!click ? (
        <div className="flex flex-col items-center w-screen h-screen fixed px-3" style={style}>
          <h1 className='text-left py-60 text-white'>On Stage<br/> Individual <br/> Events Registartion</h1>
          <div className='flex justify-center items-center bg-white w-14 h-14 rounded-full absolute bottom-20 animate-bounce'>
            <BsChevronDoubleDown onClick={handleClick}/>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col items-center w-screen h-screen pt-56 ${portalOpen && 'filter blur-lg'}`} style={style1}>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <Input label='Name' htmlFor='name' error={errors.name} register={register} required={true}/>
            <Select name='course' values={course} error={errors.course} register={register} required={true}  />
            <Select name='year' values={year} error={errors.year} register={register} required={true} />
            <Select name='department' values={department} error={errors.department} register={register} required={true}/>
            <h3>Events</h3>
            <Select name='on_stage_event_1' values={eventData} error={errors.off_stage_event_1} register={register} />
            {addEvent > 0 && <Select name='on_stage_event_2' values={eventData} error={errors.off_stage_event_2} register={register} /> }
            {addEvent > 1 && <Select name='on_stage_event_3' values={eventData} error={errors.off_stage_event_3} register={register} /> }

            {addEvent < 2 && <div className='add-more bg-green-500' onClick={addMoreEvents}>Participate more</div> }

            {!loading ? <input type='submit' value='Submit' className='submit bg-green-500'/> :
            <div className='add-more bg-green-500'>
              <Spinner/>
            </div>}
          </form>
        </div>
      )}

      {portalOpen && <Portal>
        <Overlay message={message} color='green'/>
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
