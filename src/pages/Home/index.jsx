import { useEffect } from 'react'
import { HomeStyles } from './Home.styles'
import { useDispatch, useSelector } from 'react-redux'

import { servicePost } from 'store/postApi'
const Home = () => {
	const customization = useSelector((state) => state.customization)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(servicePost())
	}, [])
	console.log(customization.isOpen)
	return (
		<HomeStyles>
			<br />
			<h1>Home</h1>

			<h1>Reducer</h1>
			<button>Changed reducer</button>
			<h1>value</h1>
		</HomeStyles>
	)
}

export default Home
