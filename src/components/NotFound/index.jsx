import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundStyles } from './NotFound.styles'

export const Notfound = () => {
	return (
		<NotFoundStyles>
			<h1 className='title-404'>404</h1>
			<h2 className='title-oh'>¡UH OH! Estas perdido.</h2>
			<p className='description'>
				La página que buscas no existe. Cómo llegaste aquí es un
				misterio.
			</p>
			<Link to='/' className='link-home'>
				HOME
			</Link>
		</NotFoundStyles>
	)
}
