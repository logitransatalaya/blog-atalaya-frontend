import React, { useEffect, useState } from 'react'
import { CarouselStyles } from './carousel.styles'
import Carousel from 'react-elastic-carousel'
import Item from './Item.styles'
import { slides, breakPoints } from 'utils/sliderImages'

const getMid = () => Math.ceil(itemsToShow / 2) - 1 // 0 based

const itemsToShow = 3

const CarouselC = () => {
	const [midItemIndex, setMidItemIndex] = useState(getMid)

	const onChange = (_, next) => {
		const mid = getMid()
		setMidItemIndex(mid + next.index)
	}
	return (
		<CarouselStyles>
			<Carousel
				breakPoints={breakPoints}
				itemsToShow={itemsToShow}
				onNextStart={onChange}
				onPrevStart={onChange}
			>
				{slides.map((item, idx) => (
					<Item midItemIndex={midItemIndex} idx={idx} key={item}>
						<img src={item.image} alt='' />
						<div className='title'>
							<h2>Hola</h2>
						</div>
					</Item>
				))}
			</Carousel>
		</CarouselStyles>
	)
}

export default CarouselC
