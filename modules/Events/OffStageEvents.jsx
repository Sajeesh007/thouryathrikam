import { useForm } from "react-hook-form"
import { useState } from "react"

import { checkEventsSelectError } from "@/util/helper"

import Select from "@/components/Form/Select"
import Progress from "./Progress"


export default function OffStageEvents({eventData, setformData, formData, setportalOpen}) {

  const { register,formState : { errors }, handleSubmit, setError} = useForm()

  const [addEvent, setaddEvent] = useState(1)

	const onSubmit = (data) => {
    data.type = 'off_stage'
    if(addEvent == 1){
      delete data?.off_stage_event_2
      delete data?.off_stage_event_3
      delete formData?.off_stage_event_2
      delete formData?.off_stage_event_3
      console.log(data)
    }else if(addEvent == 2){
      delete data?.off_stage_event_3
      delete formData?.off_stage_event_3
    }
    checkEventsSelectError(data, setError)
    setformData({...formData,...data})
    if(data.off_stage_event_1 == 'Select The Events' || data.off_stage_event_2 == 'Select The Events' || data.off_stage_event_3 == 'Select The Events') setportalOpen(false)
    else setportalOpen(true)
  } 

  console.log(formData)

  const addMoreEvents = () => {
    setaddEvent(addEvent < 3 && addEvent + 1)
  }
  const addLessEvents = () => {
    setaddEvent(addEvent > 1 && addEvent - 1)
  }

  return (
    <div className="flex flex-col items-center space-y-6 relative">
      <h2>Events</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='form'>
				<Select label='Event 1' name='off_stage_event_1' values={eventData} error={errors.off_stage_event_1} register={register} />
				{(addEvent == 2 || addEvent == 3) && <Select name='off_stage_event_2' label='Event 2' values={eventData} error={errors.off_stage_event_2} register={register} /> }
				{addEvent == 3 &&  <Select name='off_stage_event_3' label='Event 3' values={eventData} error={errors.off_stage_event_3} register={register} /> }

				{addEvent < 3 && <div className='rounded-lg px-2 w-72 h-12 text-white flex justify-center items-center bg-blue-600' 
          onClick={addMoreEvents}>Participate more</div> }
				{(addEvent == 2 || addEvent == 3) && <div className='rounded-lg px-2 w-72 h-12 text-white flex justify-center items-center bg-red-600' 
        onClick={addLessEvents}>Participate less</div> }
				
				<input type='submit' value='Submit' className='rounded-lg px-2 w-72 h-12 text-white bg-blue-600'/> 
			</form>
      <Progress page={2}/>
    </div>
  )
}
