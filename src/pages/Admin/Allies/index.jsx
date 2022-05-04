import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { CardAllyStyles, AlliesStyles } from './Allies.styles'
import { Link } from 'react-router-dom'

export default function Allies() {
	const data = [1, 2, 3, 4]

	return (
		<AlliesStyles>
			<LandscapeMenu active={3} />
			<div className='container-allies'>
				{data.map((item) => (
					<CardAllyStyles key={item}>
						<h3>Lorem ipsum dolor</h3>
						<div className='card-footer'>
							<p>Publicado por: {'Administrador 1'}</p>
							<p>Fecha : {'26/06/2022'}</p>
						</div>
					</CardAllyStyles>
				))}

				<button className='add-ally'>
					<Link to={'/admin/ally-form'}>Add</Link>{' '}
				</button>
			</div>
		</AlliesStyles>
	)
}
