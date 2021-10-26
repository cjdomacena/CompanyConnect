import React from 'react'

const Card = ({cardTitle}) => {
	const timeElapsed = Date.now();

	return (
		<div className="flex justify-center items-center ">
			<div className="bg-gray-100 w-full h-20 rounded-md shadow-sm">
					<div className="p-4">
						<h1 className="text-lg font-sans font-bold text-green-500">{cardTitle}</h1>
				
					</div>
			</div>
		</div>
	)
}

export default Card
