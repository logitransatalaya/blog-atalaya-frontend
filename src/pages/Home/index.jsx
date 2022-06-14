import React, { useEffect, useState } from 'react'
import { HomeStyles } from './Home.styles'
import Search from 'components/Search'
import { MODAL_OPEN } from 'store/actions'
import { useDispatch } from 'react-redux'
import Carousel from 'components/Carrousel/'
import SocialMedia from 'components/SocialMedia'
import ContactUs from 'components/ContactUs'

const Home = () => {
	const dispatch = useDispatch()
	const handleModal = (val) => {
		dispatch({ type: MODAL_OPEN, modalOpen: val })
	}

	return (
		<HomeStyles>
			<div className='searchbox'>
				<Search handleSearch={() => handleModal(true)} />
			</div>

			<Carousel />
			<ContactUs />
		</HomeStyles>
	)
}

export default Home
