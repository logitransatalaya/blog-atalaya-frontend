import React, { useEffect, useState } from 'react'
import { HomeStyles } from './Home.styles'
import Search from 'components/Search'
import { MODAL_OPEN } from 'store/actions'
import { useDispatch } from 'react-redux'
import Carousel from 'components/Carousel/'
import SocialMedia from 'components/SocialMedia'
import axios from 'axios'

const Home = () => {
	const dispatch = useDispatch()
	const [datas, setDatas] = useState([])
	const handleModal = (val) => {
		dispatch({ type: MODAL_OPEN, modalOpen: val })
	}
	const getData = async () => {
		const { data } = await axios.get(
			`https://blog-atalaya-back.herokuapp.com/api/v1/allies`
		)
		setDatas(data)
	}
	useEffect(() => {
		getData()
		//setData(data)
	}, [])

	return (
		<HomeStyles>
			<div>
				{datas.map((item) => (
					<h1 key={`ls${item.id}`}>{item.name}</h1>
				))}
			</div>
			<div className='searchbox'>
				<Search handleSearch={() => handleModal(true)} />
			</div>
			<div className='cont-carousel'>
				<Carousel />
			</div>
			<div className='social-media'>
				<SocialMedia />
			</div>
			{/*	<Slider />*/}
		</HomeStyles>
	)
}

export default Home
