import React from 'react'
import { Outlet } from 'react-router-dom'
import { LayoutStyles } from './layout.styles'
// ===========================|| MINIMAL LAYOUT ||=========================== //

const MinimalLayout = () => (
	<LayoutStyles>
		<Outlet />
	</LayoutStyles>
)

export default MinimalLayout
