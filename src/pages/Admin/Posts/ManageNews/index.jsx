import React, { useState, useRef, useEffect } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { ManageNewsStyles } from './ManageNews.styles'
import JoditEditor from 'jodit-react'
import FormSavePost from 'components/FormSavePost/'
import Modal from 'components/Modal/'
import { useDispatch, useSelector } from 'react-redux'
import { MODAL_OPEN } from 'store/actions'
import { Popover } from 'components/Popover'
//import { Model1 } from 'utils/modelPost'
const config = {
	readonly: false // all options from https://xdsoft.net/jodit/doc/
}

export default function ManageNews() {
	const editor = useRef(null)
	const [content, setContent] = useState(
		'<h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h2><p><br></p><p><br></p><p style="line-height: 1.5;"><br></p><p style="text-align: justify; line-height: 1.5;"><span style="font-size: 18px;">Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><p style="text-align: justify;"><span style="font-family: Tahoma, Geneva, sans-serif; font-size: 18px;"><br></span></p><p><span style="font-family: Tahoma, Geneva, sans-serif; font-size: 18px;"><img src="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2016/05/Requisitos-para-importar-en-Espa%C3%B1a-600x421.jpg" alt="" width="373" height="262" style="display: block; margin-left: auto; margin-right: auto;"></span></p><p style="text-align: justify; line-height: 1.5;"><span style="font-size: 18px;"><br></span></p><p style="line-height: 1.5; text-align: justify;"><span style="font-size: 18px;">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span></p>'
	)
	const { modalOpen } = useSelector((state) => state.customization)
	const dispatch = useDispatch()

	return (
		<ManageNewsStyles>
			<LandscapeMenu active={1} />
			<div className='container-editor'>
				<div className='editor-head'>
					<h2>Nueva noticia</h2>
					<button
						className='btn-save'
						onClick={() =>
							dispatch({
								type: MODAL_OPEN,
								modalOpen: true
							})
						}
					>
						Guardar
					</button>
				</div>

				<Popover />
				<JoditEditor
					ref={editor}
					value={content}
					config={config}
					tabIndex={5} // tabIndex of textarea
					onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
				/>
			</div>
			{modalOpen && (
				<Modal open head>
					<div className='box-p'>
						<FormSavePost content={content} />
					</div>
				</Modal>
			)}
		</ManageNewsStyles>
	)
}
