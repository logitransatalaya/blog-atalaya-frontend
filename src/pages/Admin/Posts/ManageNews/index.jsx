import React, { useState, useRef, useEffect } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { ManageNewsStyles } from './ManageNews.styles'
import { useDispatch } from 'react-redux'
import JoditEditor from 'jodit-react'
import FormSavePost from 'components/FormSavePost/'
import Modal from 'components/Modal/'
const config = {
	readonly: false // all options from https://xdsoft.net/jodit/doc/
}

export default function ManageNews() {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	const [open, setOpen] = useState(false)

	return (
		<ManageNewsStyles>
			<LandscapeMenu active={1} />

			<div className='container-editor'>
				<div>
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
						/>
					</div>
				</Modal>
			)}
		</ManageNewsStyles>
	)
}
