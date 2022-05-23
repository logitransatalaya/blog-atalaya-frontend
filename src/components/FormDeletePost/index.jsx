import React from 'react'
import { FormDeletePostStyles } from './FormDeletePost.styles'
import { useDispatch, useSelector } from 'react-redux'
import close from 'assets/icons/close2.svg'
import { MODAL_OPEN } from 'store/actions'
import { serviceDeletePost } from 'store/Admin/posts/postApi'
import { useNavigate } from 'react-router-dom'

const FrmDeletePost = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { postSlug } = useSelector((state) => state.posts)

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
					<h2 className='title'>
						¿Estás seguro de que quieres{' '}
						<span className='ms-delete'>eliminar</span> esta
						noticia?
					</h2>
				</div>
				<div className='box-actions'>
					<button
						className='btn-send'
						onClick={() => {
							dispatch(
								serviceDeletePost(postSlug?.slug, navigate)
							)
						}}
					>
						Ok
					</button>
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
