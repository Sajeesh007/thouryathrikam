import { VscCircleLargeFilled, VscCircleLargeOutline } from "react-icons/vsc";

export default function Progress({page}) {
  return (
		<>
			{page == 1 ? 
				<div className='flex space-x-2  h-10  w-10'>
					<VscCircleLargeFilled/>
					<VscCircleLargeOutline/>
				</div> : 
				<div className='flex space-x-2 h-10  w-10'>
					<VscCircleLargeOutline/>
					<VscCircleLargeFilled/>
				</div>
		}
	</>
  )
}
