import axios from "axios";

import { getAccessToken } from "@/util/prismic.helper"

import bg from "@/public/bg_blue.webp"

import Layout from "@/components/Layout/Layout"
import Events from "@/modules/Events/Events"

export default function RegisterPage({ offStageEventsData,  onStageIndividualEventsData, onStageGroupEventsData}) {

  return (
    <div className="relative pb-20 h-screen" style={{
        backgroundImage: 'url('+bg.src+')',
        backgroundRepeat: 'repeat-y'
      }}>

      <div className="flex flex-col justify-center items-center text-white relative z-10 py-10 bg-zinc-900 top-80 ">
        <h4>Registration Closed</h4>
      </div>

    </div>
  )
}

RegisterPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
