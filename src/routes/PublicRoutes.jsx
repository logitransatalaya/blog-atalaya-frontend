import React, { lazy } from 'react'

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard'
import NavMotion from 'layout/NavMotion'
import Loadable from 'components/Loadable/'

// public routing
import Home from 'pages/Home/index'
import LastNews from 'pages/LastNews/index'
import SearchNews from 'pages/SearchNews/index'

const MinimalLayout = Loadable(lazy(() => import('layout/MinimalLayout/index')))
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
		},
		{
			path: '/ultimas-noticias',
			element: (
				<NavMotion>
					<GuestGuard>
						<LastNews />
					</GuestGuard>
				</NavMotion>
			)
		},
		{
			path: '/search',
			element: (
				<NavMotion>
					<GuestGuard>
						<SearchNews />
					</GuestGuard>
				</NavMotion>
			)
		}
	]
}

export default PublicRoutes
