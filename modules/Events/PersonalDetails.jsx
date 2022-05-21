import { useState } from "react"
import { useForm } from "react-hook-form"

import { course, department, year } from '@/util/constants'
import { checkPersonalDetailsSelectError } from "@/util/helper"

import Progress from "./Progress";
import Select from "@/components/Form/Select"
import Input from "@/components/Form/Input";


export default function PersonalDetails({setformData, setshowEvents, color}) {

  const { register,formState : { errors }, handleSubmit, setError} = useForm()


  const onSubmit = (data) => {
    setformData(data)
    checkPersonalDetailsSelectError(data, setError)
    if(data.course == 'Select Your Course' || data.year == 'Select Your Year' || data.department == 'Select Your Department') setshowEvents(false)
    else setshowEvents(true)
  } 

  return (
    <div className="flex flex-col items-center space-y-6 relative">
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='form '>
        <Input type='text' label='Name' htmlFor='name' error={errors.name} register={register} required={true}/>
        <Select label='Course' name='course' values={course} error={errors.course} register={register} required={true}  />
        <Select label='Year' name='year' values={year} error={errors.year} register={register} required={true} />
        <Select label='Department' name='department' values={department} error={errors.department} register={register} required={true}/>
        <Input type='tel' label='Whatsapp Number' htmlFor='phone' error={errors.name} register={register} required={true}/>
        <Input type='email' label='College Mail Id' htmlFor='email' error={errors.name} register={register} required={true}/>
        <input type='submit' value='Submit' className={`submit ${color == 'blue' ? 'bg-blue-600' : 'bg-green-600' }`}/> 
      </form>
      <Progress page={1}/>
    </div>
  )
}
