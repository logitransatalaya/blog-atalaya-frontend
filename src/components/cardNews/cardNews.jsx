import React from 'react'
import { Link } from 'react-router-dom'
import { CardNewStyles } from './CardNews.styles'

function CardNews({ item }) {
	return (
		<CardNewStyles>
			<h2 className='title'>{item.title}</h2>

			<p>{item.description}</p>
		</CardNewStyles>
	)
}

export default CardNews
