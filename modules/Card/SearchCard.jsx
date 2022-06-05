import { useForm } from "react-hook-form";
import { useState } from "react";

import { fetchByEmail } from "@/util/airtable.helper";

import Input from "@/components/Form/Input";
import AdmitCard from "./AdmitCard";
import Spinner from "@/components/General/Spinner"

export default function SearchCard() {

  const { register,formState : { errors }, handleSubmit} = useForm()

  const [data, setdata] = useState(null)
  const [error, seterror] = useState(false)
  const [loading, setloading] = useState(false)

  const onSubmit = async (data) => {
    seterror(false)
    await fetchByEmail(data.email, setdata, seterror, setloading)
  }

  return (
    <div className="flex flex-col space-y-6 justify-center items-center px-8 
    text-violet-200 bg-zinc-900 rounded-3xl mx-2 py-6 " style={{
      backdropFilter: 'opacity(0.6)'
    }}>

      <div className="flex flex-col space-y-6 justify-center items-center">
        <h2 className="font-man">Off Stage Schedule</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type='email' label='College Mail ID' htmlFor='email' error={errors.name} register={register} required={true}/>
            {error && <p className="pb-4 text-red-500">Please check the mail you entered</p>}
            <div className="relative">
              { loading ?
                <button className="submit bg-green-500">
                  Loading...
                </button>
              :
              <input type='submit' value='Submit' className='submit bg-green-500'/> }
            </div>
        </form>
        {data && 
          <div className="border-t-2 ">
            <AdmitCard data={data} setloading={setloading}/>
          </div>}
      </div>
    </div>
  )
}
