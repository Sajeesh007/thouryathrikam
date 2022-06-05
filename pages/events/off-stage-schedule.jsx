import bg from "@/public/bg_blue.webp"

import Layout from "@/components/Layout/Layout"
import SearchCard from "@/modules/Card/SearchCard"

export default function AdmitCardPage() {

  return (
    <div className="relative pb-20" style={{
        backgroundImage: 'url('+bg.src+')',
        backgroundRepeat: 'repeat-y'
      }}>

      <div className="flex flex-col space-y-4 relative z-10 pt-20 ">
        <SearchCard />
      </div>

    </div>
  )
}

AdmitCardPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
