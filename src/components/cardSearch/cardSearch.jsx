import React from 'react'
import { useDispatch } from 'react-redux'
import { MODAL_OPEN } from 'store/actions'
import { CardSearchStyles } from './CardSearch.styles'

function CardSearch({ item, directory }) {
	const dispatch = useDispatch()

	return (
		<CardSearchStyles
			onClick={() => dispatch({ type: MODAL_OPEN, modalOpen: false })}
			to={`${directory}/${item.slug}`}
		>
			<h4 className='title'>{item.title}</h4>
			<p>{item.description}</p>
		</CardSearchStyles>
	)
}

export default CardSearch
