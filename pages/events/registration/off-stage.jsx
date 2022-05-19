import { useState, useEffect } from 'react'
import axios from 'axios'

import { getAccessToken, getEvents } from '@/util/prismic.helper'
import { course, department, year } from '@/util/constants'

import Input from '@/components/Form/Input'
import Select from '@/components/Form/Select'
import Layout from '@/components/Layout/Layout'
import { useForm } from 'react-hook-form'
import blue from '../../../public/blue.png'
import blue_small from '../../../public/blue-small.png'
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs"
import Spinner from '@/components/General/Spinner'
import Portal from '@/components/Layout/Portal'
import Overlay from '@/components/Layout/Overlay'


export default function OffStageRegistration() {

  const style = {
    backgroundImage: `url(${blue.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-y',
    zIndex: '0'
  }

  const style1 = {
    backgroundImage: `url(${blue_small.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-y',
    zIndex: '0'
  }

  const { register,formState : { errors },handleSubmit} = useForm()

  const [click, setclick] = useState(false)
  const [eventData, seteventData] = useState([])
  const [message, setmessage] = useState('')
  const [addEvent, setaddEvent] = useState(0)
  const [loading, setloading] = useState(false)
  const [portalOpen, setportalOpen] = useState(false)


  useEffect(() => {
    getEventsData()
  }, [])

  const getEventsData = async () => {
    const ref = await getAccessToken()
    await getEvents(ref, 'off_stage_events', seteventData)
  }

  const onSubmit = async (data) => {
    setloading(true)
    data.type = 'offstage'
    console.log(data)
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
    setclick(!click)
  }

  const addMoreEvents = () => {
    setaddEvent(addEvent + 1)
  }


  return (
    <div className="flex flex-col items-center px-3">
      {!click ? (
        <div className="flex flex-col items-center w-screen h-screen fixed px-3" style={style}>
          <h1 className='text-left py-60 text-white'>Off Stage <br/> Events Registartion</h1>
          <div className='flex justify-center items-center bg-white w-14 h-14 rounded-full absolute bottom-20 animate-bounce'>
            <BsChevronDoubleDown onClick={handleClick}/>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col items-center w-screen h-screen pt-60 ${portalOpen && 'filter blur-lg'}`} style={style1}>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <Input label='Name' htmlFor='name' error={errors.name} register={register} required={true}/>
            <Select name='course' values={course} error={errors.course} register={register} required={true}  />
            <Select name='year' values={year} error={errors.year} register={register} required={true} />
            <Select name='department' values={department} error={errors.department} register={register} required={true}/>
            <h3>Events</h3>
            <Select name='off_stage_event_1' values={eventData} error={errors.off_stage_event_1} register={register} />
            {addEvent > 0 && <Select name='off_stage_event_2' values={eventData} error={errors.off_stage_event_2} register={register} /> }
            {addEvent > 1 && <Select name='off_stage_event_3' values={eventData} error={errors.off_stage_event_3} register={register} /> }

            {addEvent < 2 && <div className='add-more' onClick={addMoreEvents}>Participate more</div> }
            
              {!loading ? <input type='submit' value='Submit' className='submit'/> :
              <div className='add-more'>
                <Spinner/>
              </div>}
            </form>
        </div>
      )}

      {portalOpen && <Portal>
        <Overlay message={message} color='blue'/>
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
