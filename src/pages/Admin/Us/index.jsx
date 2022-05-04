import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { CardUsStyles, UsStyles } from './Us.styles'
import { useNavigate } from 'react-router-dom'

export default function Us() {
	const navigate = useNavigate()

	const data = [
		{
			id: 1,
			title: 'Misión',
			url: 'vision',
			editionDate: '03/05/2022',
			admEditor: 'Administrador 1'
		},
		{
			id: 2,
			title: 'Visión',
			url: 'vision',
			editionDate: '03/05/2022',
			admEditor: 'Administrador 2'
		},
		{
			id: 3,
			url: 'certificates',
			title: 'Certificados',
			editionDate: '03/05/2022',
			admEditor: 'Administrador 1'
		}
	]

	return (
		<UsStyles>
			<LandscapeMenu active={2} />
			<div className='container-us'>
				{data.map((item) => (
					<CardUsStyles
						key={item.id}
						onClick={() => navigate(item.url)}
					>
						<div className='card-title'>
							<h2>{item.title}</h2>
						</div>
						<div className='card-footer'>
							<p>Fecha: {item.editionDate}</p>
							<p>Ultima edición: {item.admEditor}</p>
						</div>
					</CardUsStyles>
				))}
			</div>
		</UsStyles>
	)
}
