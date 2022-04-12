import React from 'react'
import { Link } from 'react-router-dom'
import { CardSearchStyles } from './CardSearch.styles'

function CardSearch({ item }) {
	return (
		<CardSearchStyles>
			<h3 className='title'>{item.title}</h3>

			<br />
			<p>{item.description}</p>
		</CardSearchStyles>
	)
}

export default CardSearch
