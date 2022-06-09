import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CardNewStyles } from './CardNews.styles'
import imgError from 'assets/images/image-error.jpg'
function CardNews({ item }) {
	const [state, setState] = useState(false)

	return (
		<CardNewStyles>
			<div className='card'>
				<div className='card-media'>
					<img
						onError={() => {
							setState(true)
						}}
						src={!state ? item.image : imgError}
						alt=''
						loading='lazy'
					/>
				</div>
				<div className='card-content'>
					<h3 className='title'>{item.title}</h3>
					<p className='card-text '>{item.description}</p>
				</div>
				<div className='card-actions'>
					<Link to={item.slug}>Leer mas</Link>
				</div>
			</div>
		</CardNewStyles>
	)
}

export default CardNews
