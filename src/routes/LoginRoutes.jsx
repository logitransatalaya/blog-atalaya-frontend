import React, { lazy } from 'react'

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard'
import MinimalLayout from 'layout/MinimalLayout'
import NavMotion from 'layout/NavMotion'
import Loadable from 'components/Loadable/'

// login routing
const AuthLogin = Loadable(
	lazy(() => import('pages/Authentication/Login/index'))
)

// ===========================|| AUTH ROUTING ||=========================== //

const LoginRoutes = {
	path: '',
	element: <MinimalLayout />,
	children: [
		{
			path: '/login',
			element: (
				<NavMotion>
					<GuestGuard>
						<AuthLogin />
					</GuestGuard>
				</NavMotion>
			)
		},
		{
			path: '/signup',
			element: (
				<NavMotion>
					<GuestGuard>
						<AuthLogin />
					</GuestGuard>
				</NavMotion>
			)
		}
	]
}

export default LoginRoutes
