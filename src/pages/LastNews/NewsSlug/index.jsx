import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NewsSlugStyles } from './NewsSlug.styles'
import { useDispatch, useSelector } from 'react-redux'
import { serviceNewsSlug } from 'store/newsApi'
import MenuHeader from 'components/MenuHeader'

const TitleMenus = () => {
	return (
		<>
			<h2>NOVEDADES</h2>
		</>
	)
}

export default function NewsSlug() {
	const dispatch = useDispatch()
	let { newsSlug } = useParams()
	const { postSlug } = useSelector((state) => state.lastNews)
	console.log(postSlug)

	useEffect(() => {
		dispatch(serviceNewsSlug(newsSlug))
	}, [])

	return (
		<NewsSlugStyles>
			<MenuHeader back TitleMenu={TitleMenus} />
			<div className='container-news-slug'>
				<div className='news-slug'>
					<div
						dangerouslySetInnerHTML={{ __html: postSlug?.content }}
					></div>
				</div>
			</div>
		</NewsSlugStyles>
	)
}
