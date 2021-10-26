import React from 'react'

const Tooltip = ({toolTipInfo}) => {
	return (
		<div className=" bg-green-800 absolute bottom-2 left-16  text-white rounded-lg h-8 w-auto px-4 grid place-items-center scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">
			<p>{toolTipInfo}</p>
		</div>
	)
}

export default Tooltip
