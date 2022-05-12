import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { CardAllyStyles, AlliesStyles } from './Allies.styles'
import { Link } from 'react-router-dom'
import iconMas from 'assets/icons/mas.svg'

export default function Allies() {
	const data = [1, 2, 3, 4]

	return (
		<AlliesStyles>
			<LandscapeMenu active={3} />
			<div className='add-ally'>
					<Link to={'/admin/ally-form'}>	<img src={iconMas} alt="" />	</Link>{' '}
				</div>
			<div className='container-allies'>
				{data.map((item) => (
					<CardAllyStyles key={item}>
						<h4>Lorem ipsum dolor</h4>
						<div className='card-footer'>
							<p>Publicado por: {'Administrador 1'}</p>
							<p>Fecha : {'26/06/2022'}</p>
						</div>
					</CardAllyStyles>
				))}

			</div>
		</AlliesStyles>
	)
}
