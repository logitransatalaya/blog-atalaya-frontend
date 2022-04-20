import trabajaNosotros from 'assets/images/trabaja-nosotros.jpg'
import news from 'assets/images/news.jpg'
import atalayaMobile from 'assets/images/atalaya-mobile.png'
import aliados from 'assets/images/aliados.jpg'
import nosotros from 'assets/images/nosotros.jpg'

let images = [
	'https://i.ibb.co/BrrvTsB/trabaja-nosotros.jpg',
	'https://i.ibb.co/qsqLYCs/Mesadetrabajo.png',
	'https://i.ibb.co/Fb1tVs3/man-reading-newspaper.jpg',
	'https://i.ibb.co/yyCSNtB/Logo-recepci-n.jpg',
	'https://i.ibb.co/3M7rbGB/industrial-port-and-container-yard.jpg'
]

export const slides = [
	{
		image: trabajaNosotros,
		alt: 'TRABAJA CON NOSOTROS',
		url: '/trabaja-con-nosotros'
	},
	{
		image: atalayaMobile,
		alt: 'ATALAYA MOBILE',
		url: '/atalaya-images[2]mobile'
	},
	{
		image: news,
		alt: 'ULTIMAS NOTICIAS',
		url: '/ultimas-noticias'
	},
	{
		image: nosotros,
		alt: 'NOSOTROS',
		url: '/nosotros'
	},
	{
		image: aliados,
		alt: 'ALIADOS',
		url: '/aliados'
	}
]

export const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
	{ width: 850, itemsToShow: 3 },
	{ width: 1150, itemsToShow: 3, itemsToScroll: 2 },
	{ width: 1450, itemsToShow: 3 },
	{ width: 1750, itemsToShow: 3 }
]
