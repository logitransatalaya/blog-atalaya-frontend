import Loadable from 'components/Loadable'
import React, { lazy } from 'react'

// project imports
//import MainLayout from 'layout/MainLayout'
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
			path: '/panel-admin',
			element: <h1>PanelAdmin</h1>
		}
	]
}

export default MainRoutes
