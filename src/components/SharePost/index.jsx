import React, { useEffect } from 'react'
import { SharePostStyles } from './SharePost.styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useAlert } from 'react-alert'
// ===========================|| Vision ||=========================== //

const SharePost = ({ handleClose }) => {
	let url = window.location.href
	const alert = useAlert()

	const handleCopy = () => {
		alert.success('Copied.')
		handleClose()
	}
	return (
		<SharePostStyles>
			<h4 onClick={handleClose}>CERRAR</h4>
			<br />
			<div className='box'>
				<h2 className='title-share'>COMPARTIR</h2>
				<div className='share-link'>
					<input className='field' disabled='true' value={url} />
					<CopyToClipboard text={url} onCopy={handleCopy}>
						<button className='btn'>Copiar</button>
					</CopyToClipboard>
				</div>
			</div>
		</SharePostStyles>
	)
}

export default SharePost
