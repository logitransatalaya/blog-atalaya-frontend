import Loadable from 'components/Loadable'
import React, { lazy } from 'react'

// project imports
import News from 'pages/Admin/News/'
import Profile from 'pages/Admin/Profile/'
import CreateAccount from 'pages/Admin/CreateAccount/'
import AuthGuard from 'utils/route-guard/AuthGuard'
const MainLayout = Loadable(lazy(() => import('layout/MainLayout')))
// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
	path: '/',
	element: (
		<AuthGuard>
			<MainLayout />
		</AuthGuard>
	),
	children: [
		{
			path: '/admin',
			children: [
				{
					path: 'news',
					element: <News />
				},
				{
					path: 'profile',
					element: <Profile />
				},
				{
					path: 'create-account',
					element: <CreateAccount />
				}
			]
		}
	]
}

export default MainRoutes
