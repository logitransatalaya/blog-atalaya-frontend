import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GlobalStyle } from './styles/global'
import App from './App'

// third party
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { store } from './store'

// ===========================|| REACT DOM RENDER  ||=========================== //
const root = createRoot(document.getElementById('root'))
if (process.env.NODE_ENV === 'production') {
	disableReactDevTools()
}

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</Provider>
)
