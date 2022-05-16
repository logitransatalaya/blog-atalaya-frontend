import React from 'react'
import { FormDeletePostStyles } from './FormDeletePost.styles'
import { useDispatch, useSelector } from 'react-redux'
import close from 'assets/icons/close2.svg'
import { MODAL_OPEN } from 'store/actions'

const FrmDeletePost = () => {
	const dispatch = useDispatch()
	return (
		<FormDeletePostStyles>
			<div className='box-content'>
				<div className='head-form'>
					<span
						onClick={() =>
							dispatch({
								type: MODAL_OPEN,
								modalOpen: false
							})
						}
					>
						<img src={close} alt='' />
					</span>
				</div>
				<div className='content-form'>
					<h2>Estas seguro que quieres eliminar esta noticia?</h2>
				</div>
				<div className='box-actions'>
					<button className='btn-send'>Ok</button>
					<button
						onClick={() =>
							dispatch({
								type: MODAL_OPEN,
								modalOpen: false
							})
						}
						className='btn-cacel'
					>
						Cancelar
					</button>
				</div>
			</div>
		</FormDeletePostStyles>
	)
}

export default FrmDeletePost
