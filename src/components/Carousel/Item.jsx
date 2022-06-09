import Carousel from 'react-elastic-carousel'
import React, { useEffect, useState } from 'react'

import { ItemStyles } from './Item.styles'

import { useNavigate } from 'react-router-dom'

const Item = ({ midItemIndex, idx, item }) => {
	const navigate = useNavigate()
	const [imgSrc, setImgSrc] = useState('')

	useEffect(() => {
		const img = new Image()
		img.src = item.image
		img.onload = () => {
			setImgSrc(item.image)
		}
	}, [])

	return (
		<ItemStyles
			midItemIndex={midItemIndex}
			idx={idx}
			onClick={() => navigate(item.url)}
		>
			<div className='img-item'>
				<img src={imgSrc} alt='' />
			</div>
			<div className='title'>
				<h3>{item.alt}</h3>
			</div>
		</ItemStyles>
	)
}

export default Item
