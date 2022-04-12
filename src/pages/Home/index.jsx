import { useEffect, useRef, useState } from 'react'

import { HomeStyles } from './Home.styles'
import Slider from 'components/Slider/slider'
import { useNavigate } from 'react-router-dom'
import Search from 'components/Search'
import { MODAL_OPEN } from 'store/actions'
import { useDispatch } from 'react-redux'
import Facebook from 'assets/icons/fb.svg'
import Instagram from 'assets/icons/ig.svg'
import Websit from 'assets/icons/websit.svg'

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

			<Slider />
			<div className='social-media'>
				<span>
					<img src={Facebook} alt='' />
				</span>
				<span>
					<img src={Instagram} alt='' />
				</span>
				<span>
					<img src={Websit} alt='' />
				</span>
			</div>
		</HomeStyles>
	)
}

export default Home
