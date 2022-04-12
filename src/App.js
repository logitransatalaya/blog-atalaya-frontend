import React, { useState } from 'react'

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// routing
import Routes from './routes'
import { JWTProvider } from 'contexts/JWTContext'

// ===========================|| APP ||=========================== //
const options = {
	timeout: 5000,
	position: positions.BOTTOM_CENTER
}

const App = () => {
	return (
		<JWTProvider>
			<AlertProvider template={AlertTemplate} {...options}>
				<Routes />
			</AlertProvider>
		</JWTProvider>
	)
}

export default App
