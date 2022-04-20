import React, { useEffect, useState } from 'react'
import { ItemStyles } from './Item.styles'

const Item = ({ item, midItemIndex, idx }) => {
	return (
		<ItemStyles midItemIndex={midItemIndex} idx={idx} img={item.image}>
			<div className='card-box'>
				<img loading='lazy' src={item.image} alt='' />

				<div className='title'>
					<h2>{item.alt}</h2>
				</div>
			</div>
		</ItemStyles>
	)
}

export default Item
