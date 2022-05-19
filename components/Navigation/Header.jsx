import { useState } from "react"
import logo from "../../public/logo.png"


export default function Header() {

  const [openMenu, setopenMenu] = useState(false)
  
  const handleClick = () => {
    setopenMenu(!openMenu)
  }
  return (
    <div className="absolute w-screen h-16 bg-transparent flex justify-between z-50
      items-center px-3">

      {/* logo */}
      <div className="flex items-center space-x-2 text-white">
        <img src={logo.src} alt="logo" className="w-16 h-16"/>
        <h4>Thouryathrikam</h4>
      </div>
      {/* menu icon  */}
      {/* <div>
        <BiMenuAltLeft className="menu-icon" onClick={handleClick}/>
      </div>

      { openMenu && (
        <div className="bg-purple-600">
          
        </div>
      )} */}
    </div>
  )
}
