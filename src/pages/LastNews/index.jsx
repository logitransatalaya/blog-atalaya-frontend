import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import CardNews from 'components/cardNews/cardNews'
import { LastNewStyles } from './LastNews.styles'
import { serviceNews } from 'store/newsApi'
import { useNavigate } from 'react-router-dom'
import Search from 'components/Search'
import { MODAL_OPEN } from 'store/actions'
import Lupa from 'assets/icons/lupa.svg'
import Cerrar from 'assets/icons/cerrar.svg'
import Volver from 'assets/icons/volver.svg'
import Home from 'assets/icons/home.svg'
import MenuHeader from 'components/MenuHeader'

function PaginatedItems({ itemsPerPage }) {
	const dispatch = useDispatch()

	const { news } = useSelector((state) => state.lastNews)

	const [currentItems, setCurrentItems] = useState([])
	const [pageCount, setPageCount] = useState(0)

	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(news.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(news.length / itemsPerPage))
	}, [itemOffset, itemsPerPage, news])

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % news.length
		setItemOffset(newOffset)

		if (pageCount - event.selected <= 1) {
			const offset = news.length
			dispatch(serviceNews(offset))
		}
	}
	return (
		<div className='container-news'>
			<div className='num-page'><p>PÁGINA 01 </p></div>
			{currentItems.map((item) => (
				<CardNews key={item.id} item={item} />
			))}
			<div className='container-pagination'>
				<ReactPaginate
					nextLabel=' > '
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel=' < '
					pageClassName='page-item'
					pageLinkClassName='page-link'
					previousClassName='page-item'
					previousLinkClassName='page-link'
					nextClassName='page-item'
					nextLinkClassName='page-link'
					breakLabel='...'
					breakClassName='page-item'
					breakLinkClassName='page-link'
					containerClassName='pagination'
					activeClassName='active'
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	)
}
const TitleMenus = () => {
	return (
		<>
			<h2>ÚLTIMAS NOTICIAS</h2>
			<p>Hoy es 01 de marzo del 2021</p>
		</>
	)
}

export default function LastNews() {
	const dispatch = useDispatch()

	const { news } = useSelector((state) => state.lastNews)

	useEffect(() => {
		setTimeout(() => {
			dispatch(serviceNews(0))
		}, 200)
	}, [])

	return (
		<LastNewStyles>
			<MenuHeader back TitleMenu={TitleMenus} />
			{news.length > 0 ? (
				<PaginatedItems itemsPerPage={5} />
			) : (
				<div className='container-news'>
					<h1>Loading...</h1>
				</div>
			)}
		</LastNewStyles>
	)
}
