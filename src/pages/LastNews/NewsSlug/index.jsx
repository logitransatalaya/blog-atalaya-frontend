import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { NewsSlugStyles } from './NewsSlug.styles'
import { useDispatch, useSelector } from 'react-redux'
import { serviceNewsSlug } from 'store/newsApi'
import MenuHeader from 'components/MenuHeader'
import { StyledPostContent } from './PostContent'

import { formatDate } from 'utils/date'
import Modal from 'components/Modal'
import SharePost from 'components/SharePost'
import { SCROLL_TOP } from 'store/actions'

const TitleMenus = () => <h2>NOVEDADES</h2>

export default function NewsSlug() {
	let boxPost = useRef(null)
	const dispatch = useDispatch()
	let { newsSlug } = useParams()
	const { postSlug } = useSelector((state) => state.lastNews)
	const [statusModal, setStatusModal] = useState(false)

	useEffect(() => {
		dispatch(serviceNewsSlug(newsSlug))
	}, [newsSlug])

	const handleShare = () => {
		setStatusModal(true)
	}

	useEffect(() => {
		dispatch({
			type: SCROLL_TOP,
			scroll: { key: 'post', val: true }
		})
	}, [])
	return (
		<NewsSlugStyles ref={boxPost}>
			<MenuHeader
				back
				TitleMenu={TitleMenus}
				toShare
				handleShare={handleShare}
			/>
			<div className='container-news-slug'>
				<div className='news-slug'>
					<StyledPostContent post={postSlug?.content} />
					{postSlug?.updatedAt && (
						<p className='text-update'>
							Última modificación{' '}
							{formatDate(new Date(postSlug?.updatedAt))}
						</p>
					)}
				</div>
			</div>
			{statusModal ? (
				<div>
					<Modal open>
						<div className='box-p'>
							<SharePost
								handleClose={() => setStatusModal(false)}
							/>
						</div>
					</Modal>
				</div>
			) : null}
		</NewsSlugStyles>
	)
}
