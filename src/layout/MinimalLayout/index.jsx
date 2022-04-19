import React, { useState, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from 'assets/icons/logo-atalaya.svg'
import { LayoutStyles } from './layout.styles'
import ModalSearch from 'components/ModalSearch/index'
import { LogoStyles } from 'styles/global'
import { useDispatch, useSelector } from 'react-redux'
import { MODAL_OPEN } from 'store/actions'

// ===========================|| MINIMAL LAYOUT ||=========================== //

const MinimalLayout = () => {
	const dispatch = useDispatch()

	const { modalOpen } = useSelector((state) => state.customization)

	const handleModal = (val) => {
		dispatch({ type: MODAL_OPEN, modalOpen: val })
	}

	return (
		<LayoutStyles>
			<LogoStyles>
				<img src={Logo} alt='' />
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
