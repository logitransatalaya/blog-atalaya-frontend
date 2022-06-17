import React from 'react'
import { PopoverStyles } from './Popover.styles'
import bombilla from 'assets/images/bombilla.png'
import { Link } from 'react-router-dom'

export const Popover = () => {
	return (
		<PopoverStyles>
			<div className='box-quicks'>
				<div>
					<img src={bombilla} width='80px' alt='' />
				</div>
				<div>
					<Link to='' className='quicks-title'>
						Consejos rápidos
					</Link>
					<div className='quicks-text'>
						<p>
							<strong>Título: </strong> Heading2
						</p>
						<p>
							<strong>Parrafo: </strong>
							18px - Alineado justificado - Line height 1.5
						</p>
					</div>
				</div>
			</div>
			<div className='popover__content'>
				<p className='popover__message'>
					Joseph Francis "Joey" Tribbiani, Jr.
				</p>
				<img
					alt='Nueva noticia.'
					src='https://i.ibb.co/WgrQfDv/Consejos-r-pidos.gif'
				/>
			</div>
		</PopoverStyles>
	)
}
