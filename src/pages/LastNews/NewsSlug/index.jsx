import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NewsSlugStyles } from './NewsSlug.styles'
import { useDispatch, useSelector } from 'react-redux'
import { serviceNewsSlug } from 'store/newsApi'
import MenuHeader from 'components/MenuHeader'
import { StyledPostContent } from './PostContent'

import { formatDate } from 'utils/date'
import Modal from 'components/Modal'
import SharePost from 'components/SharePost'

const TitleMenus = () => <h2>NOVEDADES</h2>

export default function NewsSlug() {
	const dispatch = useDispatch()
	let { newsSlug } = useParams()
	const { postSlug } = useSelector((state) => state.lastNews)
	const [statusModal, setStatusModal] = useState(false)

	useEffect(() => {
		dispatch(serviceNewsSlug(newsSlug))
	}, [])

	const handleShare = () => {
		setStatusModal(true)
	}

	return (
		<NewsSlugStyles>
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
			{statusModal && (
				<div>
					<Modal open>
						<div className='box-p'>
							<SharePost
								slug={postSlug?.slug}
								handleClose={() => setStatusModal(false)}
							/>
						</div>
					</Modal>
				</div>
			)}
		</NewsSlugStyles>
	)
}
