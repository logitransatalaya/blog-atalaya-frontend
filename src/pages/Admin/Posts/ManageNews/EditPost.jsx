import React, { useState, useRef, useEffect } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { ManageNewsStyles } from './ManageNews.styles'
import JoditEditor from 'jodit-react'
import FormSavePost from 'components/FormSavePost/'
import Modal from 'components/Modal/'
import { useDispatch, useSelector } from 'react-redux'
import { serviceGetPostBySlug } from 'store/Admin/posts/postApi'
import { useParams } from 'react-router-dom'
const config = {
	readonly: false // all options from https://xdsoft.net/jodit/doc/
}

export default function ManageNews() {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch()
	const { postSlug } = useSelector((state) => state.posts)
	let { slug } = useParams()
  

    useEffect(() => {
		dispatch(serviceGetPostBySlug(slug))

	}, [])

	useEffect(() => {
		if(postSlug){
			setContent(postSlug.content)
		}
	}, [postSlug])
	
	
	return (
		<ManageNewsStyles>
			<LandscapeMenu active={1} />

			<div className='container-editor'>
				<div>
					<h1>Editar noticia</h1>
					<button onClick={() => setOpen(true)}>Guardar</button>
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
				<Modal open head>
					<div className='box-p'>
						<FormSavePost
							onClose={() => setOpen(false)}
							content={content}
							dataEdit = {postSlug}
						/>
					</div>
				</Modal>
			)}
		</ManageNewsStyles>
	)
}
