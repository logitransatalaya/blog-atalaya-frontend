import React, { useState, useRef, useEffect } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { ManageNewsStyles } from './ManageNews.styles'
import { useDispatch } from 'react-redux'
import JoditEditor from 'jodit-react'
import { servicecreatePost } from 'store/Admin/posts/createPostApi'
import FormSavePost from 'components/FormSavePost/'
import Modal from 'components/Modal/'
const config = {
	readonly: false // all options from https://xdsoft.net/jodit/doc/
}
const convertToSlug = (Text) => {
	return Text.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '')
}

export default function ManageNews() {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch()

	const savePost = () => {
		let data = {
			content: content,
			description:
				'La masa máxima que se autoriza para el transporte terrestre de mercancías incluye la del vehículo, el peso del conductor, los viajes, el equipamiento y la mercancía que se transporta. La Comunidad Económica Europea la clasifica en las categorías M, N y O en función de si son transportes de mercancías o remolques o semirremolques.',
			slug: convertToSlug(
				'¿Cuál es el peso máximo autorizado para camiones?'
			),
			status: true,
			title: '¿Cuál es el peso máximo autorizado para camiones?'
		}
		dispatch(servicecreatePost(data))
	}

	return (
		<ManageNewsStyles>
			<LandscapeMenu active={1} />

			<div className='container-editor'>
				<div>
					<button onClick={savePost}>Guardar</button>
				</div>
				<JoditEditor
					ref={editor}
					value={content}
					config={config}
					tabIndex={1} // tabIndex of textarea
					onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
				/>
			</div>
			{open && (
				<Modal open>
					<div className='box-p'>
						<FormSavePost />
					</div>
				</Modal>
			)}
		</ManageNewsStyles>
	)
}
