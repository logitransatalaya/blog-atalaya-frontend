import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import {
	CertificatesStyles,
	CardCertificatesStyles
} from './Certificates.styles'
import { Link } from 'react-router-dom'

export default function Allies() {
	const data = [1, 2, 3, 4]

	return (
		<CertificatesStyles>
			<LandscapeMenu active={2} />
			<div className='container-certificates'>
				{data.map((item) => (
					<CardCertificatesStyles key={item}>
						<h3>Lorem ipsum dolor</h3>
						<div className='card-footer'>
							<p>Publicado por: {'Administrador 1'}</p>
							<p>Fecha : {'26/06/2022'}</p>
						</div>
					</CardCertificatesStyles>
				))}

				<button className='add-certificate'>
					<Link to={'/admin/certificate-form'}>Add</Link>{' '}
				</button>
			</div>
		</CertificatesStyles>
	)
}
