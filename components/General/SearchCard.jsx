import { useForm } from "react-hook-form";
import { useState } from "react";

import { fetchByEmail } from "@/util/supabase.helper";

import Input from "@/components/Form/Input";
import PersonalDetails from "./PersonalDetails";
import CertificateDetails from "./CertificateDetails";

export default function SearchCard() {

  const { register,formState : { errors }, handleSubmit} = useForm()

  const [groupData, setgroupData] = useState(null)
  const [singeData, setsingleData] = useState(null)
  const [error, seterror] = useState(false)
  const [loading, setloading] = useState(false)

  const onSubmit = async (data) => {
    seterror(false)
    await fetchByEmail(data.email, setsingleData, setgroupData, seterror, setloading)
  }

  return (
    <div className="flex flex-col space-y-6 justify-center items-center px-8 
    text-white  bg-zinc-900 rounded-3xl mx-2 py-6 ">

      <div className="flex flex-col space-y-6 justify-center items-center">
        <h2 className="font-man">Certificates</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
            <Input type='email' label='College Mail ID' htmlFor='email' error={errors.email} register={register} required={true} />
            
              {error && <p className="pb-4 text-yellow-600">
                Please check the mail id you entered or there is no participation record exist.
              </p>}

            { loading ?
              <button className="submit bg-green-500">
                Loading...
              </button>
            :
            <input type='submit' value='Submit' className='submit bg-green-500'/> }
        
        </form>
      </div>

      {(singeData || groupData ) && <div className='flex flex-col space-y-4'>
        <h3>Validate Details</h3>

        <ul className='list-disc text-sm mx-4'>
          <li>Change your name as per the college ID</li>
          <li>
            If there is an error in the event participation or result please contact&nbsp;
            <a className='text-green-500 underline' target='_blank' rel="noreferrer" href='https://wa.me/916238065153'>wa.me/916238065153</a>
          </li>
        </ul>

        <PersonalDetails 
          name={singeData?.personal_details?.name}
          email={singeData?.personal_details?.Email}
          year={singeData?.personal_details?.year}
          dept={singeData?.personal_details?.dept}
        />


        <div className='flex flex-col space-y-4'>
          <h3>Event Participation Details</h3>
          <CertificateDetails type="Individual Events Certificates" participant={singeData?.personal_details?.name} 
             year={singeData?.personal_details?.year} dept={singeData?.personal_details?.dept} 
          data={{
            event_1: singeData?.personal_details?.event_1 && { name: singeData?.personal_details?.event_1, result: singeData?.personal_details?.result_1, cert: singeData?.personal_details?.cert_1},
            event_2: singeData?.personal_details?.event_2 && { name: singeData?.personal_details?.event_2, result: singeData?.personal_details?.result_2, cert: singeData?.personal_details?.cert_2},
            event_3: singeData?.personal_details?.event_3 && { name: singeData?.personal_details?.event_3, result: singeData?.personal_details?.result_3, cert: singeData?.personal_details?.cert_3},
            event_4: singeData?.personal_details?.event_4 && { name: singeData?.personal_details?.event_4, result: singeData?.personal_details?.result_4, cert: singeData?.personal_details?.cert_4},
            event_5: singeData?.personal_details?.event_5 && { name: singeData?.personal_details?.event_5, result: singeData?.personal_details?.result_5, cert: singeData?.personal_details?.cert_5},
            event_6: singeData?.personal_details?.event_6 && { name: singeData?.personal_details?.event_6, result: singeData?.personal_details?.result_6, cert: singeData?.personal_details?.cert_6},
          }}/>

          <CertificateDetails type="Group Events Certificates" participant={groupData?.personal_details?.name} 
             year={groupData?.personal_details?.year} dept={groupData?.personal_details?.dept} id={groupData?.personal_details?.id}
           data={{
            event_1: groupData?.personal_details?.event_1 && { name: groupData?.personal_details?.event_1, result: groupData?.personal_details?.result_1, cert: groupData?.personal_details?.cert_1},
            event_2: groupData?.personal_details?.event_2 && { name: groupData?.personal_details?.event_2, result: groupData?.personal_details?.result_2, cert: groupData?.personal_details?.cert_2},
            event_3: groupData?.personal_details?.event_3 && { name: groupData?.personal_details?.event_3, result: groupData?.personal_details?.result_3, cert: groupData?.personal_details?.cert_3},
          }}/>
        </div>
        
      </div> }

      

    </div>
  )
}
