import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import CardNews from 'components/cardNews/cardNews'
import { LastNewStyles } from './LastNews.styles'
import { serviceNews } from 'store/newsApi'

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
			{currentItems.map((item) => (
				<CardNews key={item.id} item={item} />
			))}
			<div className='container-pagination'>
				<ReactPaginate
					nextLabel='next >'
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel='< previous'
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
export default function LastNews() {
	const dispatch = useDispatch()
	const { news } = useSelector((state) => state.lastNews)

	useEffect(() => {
		setTimeout(() => {
			dispatch(serviceNews(0))
		}, 5000)
	}, [])

	return (
		<LastNewStyles>
			<div>
				<h1>Log</h1>
			</div>
			<div>
				<h1>Search</h1>
			</div>

			{news.length > 0 ? (
				<PaginatedItems itemsPerPage={5} />
			) : (
				<div className='container-news'>
					<h2>Loading...</h2>
				</div>
			)}
		</LastNewStyles>
	)
}
