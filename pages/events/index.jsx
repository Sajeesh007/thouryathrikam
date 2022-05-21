import bg from "@/public/bg_blue.webp"
import Layout from "@/components/Layout/Layout"

export default function Events() {
  return (
    <div className="relative">
      <img src={bg.src} alt="bg" className="object-cover absolute top-0 z-0 brightness-75 contrast-125 bg-repeat-y" />


    </div>
  )
}

Events.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
