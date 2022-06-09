import Carousel from 'react-elastic-carousel'
import React, { useEffect, useState } from 'react'
import { CarouselStyles } from './carousel.styles'

import Item from './Item'
import { slides, breakPoints } from 'utils/sliderImages'
import { useNavigate } from 'react-router-dom'

const getMid = () => Math.ceil(itemsToShow / 2) - 1 // 0 based

const itemsToShow = 3

const CarouselC = () => {
	const [midItemIndex, setMidItemIndex] = useState(2)

	const onChange = (_, next) => {
		const mid = getMid()
		setMidItemIndex(mid + next.index)
	}

	return (
		<CarouselStyles>
			<Carousel
				initialActiveIndex={1}
				itemPadding={[0, 5]}
				outerSpacing={-10}
				breakPoints={breakPoints}
				itemsToShow={itemsToShow}
				onNextStart={onChange}
				onPrevStart={onChange}
			>
				{slides.map((item, idx) => (
					<Item
						item={item}
						midItemIndex={midItemIndex}
						idx={idx}
						key={item.id}
					/>
				))}
			</Carousel>
		</CarouselStyles>
	)
}

export default CarouselC
