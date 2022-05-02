import React from 'react'
import { Outlet } from 'react-router-dom'
import { LogoStyles } from 'styles/global'
import { MainLayoutStyles } from './MainLayout.styles'
// ===========================|| MAIN LAYOUT ||=========================== //

const MainLayout = () => {
	return (
		<MainLayoutStyles>
			{/* main content */}
			<main>
				{true ? (
					<LogoStyles>
						<img
							src={
								require(`assets/images/logo-atalaya.svg`)
									.default
							}
						/>
					</LogoStyles>
				) : null}
				<Outlet />
			</main>
		</MainLayoutStyles>
	)
}

export default MainLayout
