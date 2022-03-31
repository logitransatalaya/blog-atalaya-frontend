import React, { lazy } from 'react'

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard'
import MinimalLayout from 'layout/MinimalLayout'
import NavMotion from 'layout/NavMotion'
import Loadable from 'components/Loadable/'

// public routing
const Home = Loadable(lazy(() => import('pages/Home/index')))

// ===========================|| PUBLIC ROUTING ||=========================== //

const PublicRoutes = {
	path: '',
	element: <MinimalLayout />,
	children: [
		{
			path: '/',
			element: (
				<NavMotion>
					<GuestGuard>
						<Home />
					</GuestGuard>
				</NavMotion>
			)
		}
	]
}

export default PublicRoutes
