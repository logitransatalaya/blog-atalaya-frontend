import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { CardPostStyles, PostStyles } from './Posts.styles'
import { Link } from 'react-router-dom'
import { serviceGetPosts } from 'store/Admin/posts/postApi'
import { useDispatch, useSelector } from 'react-redux'

export default function LastNews() {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const dispatch = useDispatch()
	const { posts } = useSelector((state) => state.posts)

	useEffect(() => {
		setTimeout(() => {
			dispatch(serviceGetPosts(0))
		}, 200)
	}, [])

	return (
		<PostStyles>
			<LandscapeMenu active={1} />
			<div className='container-posts'>
				{data.map((item) => (
					<CardPostStyles key={item}>
						<h3>Lorem ipsum dolor</h3>
						<div className='card-footer'>
							<p>Publicado por: {'Administrador 1'}</p>
							<p>Fecha : {'26/06/2022'}</p>
						</div>
					</CardPostStyles>
				))}

				<Link className='add-post' to={'manage-news'}>
					Add{' '}
				</Link>
			</div>
		</PostStyles>
	)
}
