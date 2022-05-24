import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import {
	CertificatesStyles,
	CardCertificatesStyles
} from './Certificates.styles'
import iconMas from 'assets/icons/mas.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { serviceGetCertificates } from 'store/Admin/us/certificateApi'

export default function Allies() {
	const dispatch = useDispatch()
	const { certificates } = useSelector((state) => state.certificate)
		
	useEffect(() => {
		dispatch(serviceGetCertificates())
	}, [])
	
	return (
		<CertificatesStyles>
			<LandscapeMenu active={2} />
			<div className='add-certificate'>
				<Link to={'/admin/us/add-certificate'}>
					{' '}
					<img src={iconMas} alt='' />
				</Link>{' '}
			</div>
			<div className='ct-us'>
				<h4>Certificados</h4>
				<div className='contenedor'>
					{certificates.map((item) => (
						<CardCertificatesStyles key={item.id}>
							<h4>{item.title}</h4>
							<div className='card-footer'>
								<p>Publicado por: {item.author?.firstName}</p>
								<p>Fecha : {item.updatedAt}</p>
							</div>
						</CardCertificatesStyles>
					))}
				</div>
			</div>
		</CertificatesStyles>
	)
}
