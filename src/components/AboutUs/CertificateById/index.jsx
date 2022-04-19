import React from 'react'
import { CertificateStyles } from './Certificates.styles'
// ===========================|| Mission ||=========================== //

const Certificates = ({ handleClose, id }) => {
	return (
		<CertificateStyles>
			<h3 onClick={handleClose}>CERRAR</h3>
			<br />
			<div className='box'>
				<h2>Certificates id : {id}</h2>
				<p>
					Lorem ip|sum dolor sit amet, consectetuer adipiscing elit.
					Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
					natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus.
				</p>
			</div>
		</CertificateStyles>
	)
}

export default Certificates
