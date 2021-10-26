import React from 'react'
import { VscAccount } from 'react-icons/vsc'
import { HiOfficeBuilding } from 'react-icons/hi'
import Tooltip from './Tooltip/Tooltip'
const Sidebar = () => {
	return (
		<div className="
		w-16 h-screen bg-gray-100
		fixed top-0 left-0
		shadow z-20 isolate">
			<div className="grid grid-cols-1 grid-rows-4 place-items-center gap-8 mt-8">
				<div className="group">
					<div className=" sidebar-icons relative" >
						<VscAccount className="text-2xl fill-current text-green-800 group-hover:text-white transition-all ease-linear duration-300" />
						<Tooltip toolTipInfo="Account"/>
					</div>
		
				</div>
				<div className="group">
				<div className="sidebar-icons relative" >
					<HiOfficeBuilding className="text-2xl fill-current text-green-800 group-hover:text-white transition-all ease-linear duration-300" />
					<Tooltip toolTipInfo="Company"/>
				</div>

				</div>
			</div>

		</div>
	)
}

export default Sidebar
