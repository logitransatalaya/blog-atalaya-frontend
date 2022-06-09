import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { LayoutStyles } from './layout.styles'
import ModalSearch from 'components/ModalSearch/index'
import { LogoStyles } from 'styles/global'
import { useDispatch, useSelector } from 'react-redux'
import { MODAL_OPEN, SCROLL_TOP } from 'store/actions'

// ===========================|| MINIMAL LAYOUT ||=========================== //

const MinimalLayout = () => {
	const dispatch = useDispatch()
	let textInput = useRef(null)
	const { modalOpen, scroll } = useSelector((state) => state.customization)

	const handleModal = (val) => {
		dispatch({ type: MODAL_OPEN, modalOpen: val })
	}

	useEffect(() => {
		if (scroll?.val) {
			textInput.current.scrollTo(80, 0)
			dispatch({
				type: SCROLL_TOP,
				scroll: {}
			})
		}
	}, [scroll])

	return (
		<LayoutStyles ref={textInput}>
			<LogoStyles>
				<img
					loading='lazy'
					src={require(`assets/images/logo-atalaya.svg`).default}
				/>
			</LogoStyles>
			<div>
				<ModalSearch
					open={modalOpen}
					onClose={() => handleModal(false)}
				/>
			</div>
			<div className='outlet'>
				<Outlet />
			</div>
		</LayoutStyles>
	)
}

export default MinimalLayout
