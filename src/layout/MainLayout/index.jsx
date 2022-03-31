import React from 'react'
import { Outlet } from 'react-router-dom'

// ===========================|| MAIN LAYOUT ||=========================== //

const MainLayout = () => {
	return (
		<div>
			{/* main content */}
			<main>
				<h1>Main Layout</h1>
				<Outlet />
			</main>
		</div>
	)
}

export default MainLayout
