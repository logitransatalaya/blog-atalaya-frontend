import React, { useEffect } from 'react'
import { SharePostStyles } from './SharePost.styles'
// ===========================|| Vision ||=========================== //

const SharePost = ({ handleClose, slug }) => {
	const handleCopy = () => {
		let url = window.location.href
		navigator.clipboard.writeText(url)
		handleClose()
	}
	return (
		<SharePostStyles>
			<h4 onClick={handleClose}>CERRAR</h4>
			<br />
			<div className='box'>
				<h2 className='title-share'>COMPARTIR</h2>
				<div className='share-link'>
					<input className='field' disabled='true' value={slug} />
					<button className='btn' onClick={handleCopy}>
						Copiar
					</button>
				</div>
			</div>
		</SharePostStyles>
	)
}

export default SharePost
