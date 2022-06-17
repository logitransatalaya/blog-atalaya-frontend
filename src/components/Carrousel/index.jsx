import React, { useEffect, useState } from 'react'
import { CarrouselStyles } from './Carrousel.styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { motion } from 'framer-motion'
import { slides, breakPoints, variantsImg } from 'utils/sliderImages'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'
import trabajaNosotros from 'assets/images/trabaja-nosotros.jpg'
import news from 'assets/images/news.jpg'

const getPosition = (index, position) => {
	return index === position ? 'center' : index > position ? 'right' : 'left'
}
const Carrousel = () => {
	const [position, setPosition] = useState(0)
	const [widthScreen, setWidthScreen] = useState(0)
	const [imgSrc, setImgSrc] = useState(null)

	useEffect(() => {
		setWidthScreen(window.innerWidth)
		const handleResize = () => {
			window.onresize = () => setWidthScreen(window.innerWidth)
		}
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<CarrouselStyles>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={20}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSlideChange={(e) => setPosition(e.activeIndex)}
				centeredSlides={true}
				breakpoints={breakPoints}
			>
				{slides.map((item, index) => (
					<SwiperSlide key={item.id}>
						<Link to={item.url} className='navigation'>
							<div className='card__img-wrapper'>
								{widthScreen > 700 ? (
									<motion.img
										className='card__img'
										src={item.image}
										variants={variantsImg}
										animate={() =>
											getPosition(index, position)
										}
										transition={{
											type: 'keyframes',
											duration: 0.5
										}}
									/>
								) : (
									<img
										className='card__img img'
										src={item.image}
									/>
								)}
								<h2 className='card__title'>{item.alt}</h2>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</CarrouselStyles>
	)
}

export default Carrousel
