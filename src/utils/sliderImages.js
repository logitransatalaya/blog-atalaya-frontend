import trabajaNosotros from 'assets/images/trabaja-nosotros.jpg'
import news from 'assets/images/news.jpg'
import aliados from 'assets/images/aliados.jpg'
import nosotros from 'assets/images/nosotros.jpg'

export const slides = [
	{
		image: trabajaNosotros,
		alt: 'TRABAJA CON NOSOTROS',
		url: '/trabaja-con-nosotros',
		id: 'c01'
	},

	{
		image: news,
		alt: 'ULTIMAS NOTICIAS',
		url: '/ultimas-noticias',
		id: 'c02'
	},
	{
		image: nosotros,
		alt: 'NOSOTROS',
		url: '/nosotros',
		id: 'c03'
	},
	{
		image: aliados,
		alt: 'ALIADOS',
		url: '/aliados',
		id: 'c04'
	}
]

export const breakPoints = {
	// when window width is >= 640px

	640: {
		//width: 640,
		slidesPerView: 1
	},
	// when window width is >= 768px
	768: {
		//width: 768,
		slidesPerView: 2
	},
	968: {
		//width: 768,
		slidesPerView: 3
	}
}
export const variantsImg = {
	center: {
		x: '-26%'
	},
	left: {
		x: '-42%'
	},
	right: {
		x: '-10%'
	}
}
