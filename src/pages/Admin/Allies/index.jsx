import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { CardAllyStyles, AlliesStyles } from './Allies.styles'
import { Link, useNavigate } from 'react-router-dom'
import iconMas from 'assets/icons/mas.svg'
import { serviceGetAllies } from 'store/Admin/allyApi'
import { useDispatch, useSelector } from 'react-redux'

export default function Allies() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { allies } = useSelector((state) => state.allies)

	useEffect(() => {
		if (allies.length === 0) {
			dispatch(serviceGetAllies())
		}
	}, [allies])

	return (
		<AlliesStyles>
			<LandscapeMenu active={3} />
			<div className='add-ally'>
				<Link to={'add'}>
					{' '}
					<img src={iconMas} alt='' />{' '}
				</Link>{' '}
			</div>

			<div className='contenedor'>
				{allies.map((item) => (
					<CardAllyStyles
						key={item.id}
						onClick={() => navigate(`edit/${item.id}`)}
					>
						<h4>{item.name}</h4>
						<div className='card-footer'>
							<p>Publicado por: {item.author?.firstName}</p>
							<p>Fecha : {item.updatedAt}</p>
						</div>
					</CardAllyStyles>
				))}
			</div>
		</AlliesStyles>
	)
}
