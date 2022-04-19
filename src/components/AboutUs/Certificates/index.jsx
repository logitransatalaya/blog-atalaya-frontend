import React from 'react'
import { CertificateStyles } from './Certificates.styles'
// ===========================|| Mission ||=========================== //

const Certificates = ({ handleClose, handleCertificate }) => {
	return (
		<CertificateStyles>
			<h3 onClick={handleClose}>CERRAR</h3>
			<br />
			<div className='box'>
				{[1, 2, 3, 45, 6, 7].map((item, index) => (
					<div
						key={index}
						className='card-certificate'
						onClick={() => handleCertificate(index)}
					>
						<h2>Certificates</h2>
						<p>
							Lorem ip|sum dolor sit amet, consectetuer adipiscing
							elit. Aenean commodo ligula eget dolor. Aenean
							massa. Cum sociis natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus.
						</p>
					</div>
				))}
			</div>
		</CertificateStyles>
	)
}

export default Certificates
