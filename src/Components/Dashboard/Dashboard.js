import React from 'react'
import Card from './Card/Card'

const Dashboard = () => {



	return (
	
			<div className="w-screen h-screen pl-16 z-10 bg-gray-200 pt-8">
				<div className="pl-4 pr-4 pb-4">
					<h1 className="text-3xl font-bold">Dashboard</h1>
					<p>{new Date(Date.now()).toDateString()}</p>
				</div>
				<div className="
						grid auto-rows-auto pt-4 px-4 gap-4
						grid-cols-1
						xs:grid-cols-1
						sm:grid-cols-1
						lg:grid-cols-3
						xl:grid-cols-3
						">
					<Card cardTitle="Today" />
					<Card cardTitle="Reminder" />
					<Card cardTitle="Notifications" />
				</div>

			</div>

	)
}

export default Dashboard
