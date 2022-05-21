import bg from "@/public/bg_blue.webp"
import Layout from '@/components/Layout/Layout'
import Card from "@/components/General/Card"

export default function Register() {
  return (
    <div className="relative">
      <img src={bg.src} alt="bg" className="object-cover absolute -top-48 z-0  " />

      <div className="flex flex-col z-20 pt-18 relative justify-center items-center space-y-4">
        <Card color={'green'} heading='Off Stage' route={'off-stage'}/>
        <Card color='red' heading='On Stage Individual' route={'on-stage/individual'}/>
        <Card heading='On Stage Group' route={'on-stage/group'}/>
      </div>
      
    </div>
  )
}

Register.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
