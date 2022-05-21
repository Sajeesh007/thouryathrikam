
import bg from '@/public/tribal_bg_2.webp'
import { BsChevronDoubleDown } from "react-icons/bs"

import Layout from '@/components/Layout/Layout'


export default function OnStageGroupRegistration() {


  return (
    <div className="flex px-3 flex-col items-center w-screen h-screen relative font-man" >
      <img src={bg.src} alt="bg" className="object-cover absolute -top-16 z-0 brightness-75 contrast-125" />
      <h2 className='text-center absolute -bottom-12 text-zinc-100 z-20 '>
        On Stage Group Events Registartion
        </h2>
        <div className='flex flex-col justify-center items-center absolute -bottom-44 font-sans px-4 py-3
         bg-yellow-500 mx-4 rounded-3xl text-white shadow-lg shadow-yellow-800'>
          <h3>Reminder</h3>
          <h6 className='text-center'>Contact your year coordinator for registering group events</h6>
        </div>
    </div>
     
  )
}

OnStageGroupRegistration.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
