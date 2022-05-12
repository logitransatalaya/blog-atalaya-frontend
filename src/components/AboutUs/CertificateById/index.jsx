import React from 'react'
import { CertificateStyles } from './Certificates.styles'
// ===========================|| Mission ||=========================== //

const Certificates = ({ handleClose, id }) => {
	return (
		<CertificateStyles>
			<h4 onClick={handleClose}>CERRAR</h4>
			<br />
			<div className='box'>
				<h3>CERTIFICADO ISO 90001 {id}</h3>
				<p>
				Lorem ip|sum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


				</p>
			</div>
		</CertificateStyles>
	)
}

export default Certificates
