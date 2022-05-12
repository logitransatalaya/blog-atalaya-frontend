import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormSavePostStyles } from './FormSavePost.styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import close from 'assets/icons/close2.svg'
import { convertToSlug } from 'utils/slug'
import { servicecreatePost, serviceUpdatePost } from 'store/Admin/posts/postApi'
import { useAlert } from 'react-alert'
import { CREATE_POST_RESET } from 'store/actions'

const valuesInitial = { title:'',image:'', description:'', status:true}

const schema = yup.object({
	title: yup
		.string()
		.trim('Titulo no puede incluir espacios iniciales y finales')
		.min(3, 'Titulo debe tener al menos 3 caracteres')
		.max(255, 'Titulo no puede exceder los 255 caracteres')
		.required('Titulo es requerido'),
	image: yup
		.string()
		.trim('Portada no puede incluir espacios iniciales y finales')
		.min(3, 'Portada debe tener al menos 3 caracteres'),

	description: yup
		.string()
		.trim('Descripción no puede incluir espacios iniciales y finales')
		.min(3, 'Descripción debe tener al menos 3 caracteres')
		.required('Descripción es requerida'),
	status: yup.boolean()
})

const FrmSavePost = ({ onClose, content,dataEdit }) => {
	const dispatch = useDispatch()
	const alert = useAlert()
	const { message, error } = useSelector((state) => state.posts)
   const [values, setValues] = useState(dataEdit ? dataEdit: valuesInitial)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
		defaultValues: {
			title: values.title,
			image:values.image,
			description: values.description,
			status: values.status
		  }
	})

	useEffect(() => {
		if (error) {
			alert.error(message)
			dispatch({ type: CREATE_POST_RESET })
		}
		if (!error && message) {
			onClose()
			alert.show(message)
			dispatch({ type: CREATE_POST_RESET })
		}
	}, [error, message])

	useEffect(() => {
		dispatch({ type: CREATE_POST_RESET })
	}, [])

	const onSubmit = (data) => {
		const slug = convertToSlug(data.title)
		if(!dataEdit){
			dispatch(servicecreatePost({ ...data, slug, content }))
		}else{
	
           dispatch(serviceUpdatePost({ ...data, slug, content , slugEdit:values.slug}))
		}
		
	}

	return (
		<FormSavePostStyles>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='head-form'>
					<span onClick={onClose}>
						<img src={close} alt='' />
					</span>
				</div>
				<div className='col-25'>
					<h4>Titulo: </h4>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('title')
						})}
						name='title'
						autoComplete='off'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.title?.message}
						</p>
					)}
				</div>
				<div className='col-25'>
					<h4>Portada: </h4>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('image')
						})}
						name='image'
						autoComplete='off'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.image?.message}
						</p>
					)}
				</div>

				<div className='col-25'>
					<h4>Descripción: </h4>
				</div>
				<div className='col-75'>
					<textarea
						{...(register && {
							...register('description')
						})}
						rows='4'
						name='description'
						autoComplete='off'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.description?.message}
						</p>
					)}
				</div>
				<div className='col-25'>
					<h4>Estado</h4>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('status')
						})}
						type='checkbox'
						name='status'
						//defaultChecked={true}
						className='checkbox'
					/>

					{errors && (
						<p className='error-message'>
							{errors?.status?.message}
						</p>
					)}
				</div>
				<div className='box-actions'>
					<button className='btn-send' type='submit'>
						Ok
					</button>
					<button onClick={onClose} className='btn-cacel'>
						Cancelar
					</button>
				</div>
			</form>
		</FormSavePostStyles>
	)
}

export default FrmSavePost
