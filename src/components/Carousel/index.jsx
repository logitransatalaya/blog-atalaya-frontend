import React, { useEffect, useState } from 'react'
import { CarouselStyles } from './carousel.styles'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import { slides } from 'utils/sliderImages'
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
				itemsToShow={itemsToShow}
				onNextStart={onChange}
				onPrevStart={onChange}
				style={{}}
			>
				{slides.map((item, idx) => (
					<Item
						item={item}
						idx={idx}
						key={idx}
						midItemIndex={midItemIndex}
					/>
				))}
			</Carousel>
		</CarouselStyles>
	)
}

export default CarouselC
