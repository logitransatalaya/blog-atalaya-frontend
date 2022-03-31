import React from 'react'

// routing
import Routes from './routes'
import { JWTProvider } from 'contexts/JWTContext'

// ===========================|| APP ||=========================== //

const App = () => {
	return (
		<JWTProvider>
			<Routes />
		</JWTProvider>
	)
}

export default App
