import { useRouter } from 'next/router'

import bg from "../public/bg.png"
import logo from "../public/logo.png"
import title from "../public/title.png"

export default function Home() {

  const style = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-y',
    zIndex: '10'
  }

  const router = useRouter()

  const handleClick = (url) => {
    router.push(url)
  }

//bg-gradient-to-b from-blue-500 via-slate-800 to-green-500
  return (
    <div className="flex flex-col bg-blue-600 relative">
      
      <img src={bg.src} alt="bg" className="w-screen h-screen bg-repeat-y absolute top-0 left-0 "/>

      <div className="relative w-screen " style={{height: '750px'}}>
        <img src={logo.src} alt="logo" className="w-32 h-32 mx-auto bottom-0 left-0 right-0 absolute" style={{top: '570px'}}/>
        <img src={title.src} alt="title" className="w-screen absolute -top-28" style={{height: '800px'}}/>
      </div>

      {/* <div className="text-white relative z-20 flex flex-col items-center space-y-6 pb-12">
        <button className="add-more bg-green-500" onClick={()=>handleClick('/events/registration')}>Register Now</button>
        <button className="add-more bg-green-500" onClick={()=>handleClick('/events/')}>Explore Events</button>
      </div> */}
    </div>
  )
}

// Home.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

