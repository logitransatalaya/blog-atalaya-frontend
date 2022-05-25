import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormAllyStyles } from './FormAlly.styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LandscapeMenu from 'components/LandscapeMenu'
import useAuth from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { serviceCreateAlly } from 'store/Admin/allyApi'

const schema = yup.object({
	title: yup
		.string()
		.trim('Titulo no puede incluir espacios iniciales y finales')
		.min(3, 'Titulo debe tener al menos 3 caracteres')
		.max(255, 'Titulo no puede exceder los 255 caracteres')
		.required('Titulo es requerido'),
	url: yup
		.string()
		.trim('Url no puede incluir espacios iniciales y finales')
		.min(3, 'Url debe tener al menos 3 caracteres'),
	image: yup
		.string()
		.trim('Imagen no puede incluir espacios iniciales y finales')
		.min(3, 'Imagen debe tener al menos 3 caracteres'),
	description: yup
		.string()
		.trim('Descripción no puede incluir espacios iniciales y finales')
		.min(3, 'Descripción debe tener al menos 3 caracteres')
		.required('Descripción es requerida')
})

const AddAlly = () => {
	const dispatch = useDispatch()
	const { user } = useAuth()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	const onSubmit = (data) => {
		console.log(data)
		dispatch(serviceCreateAlly(data, navigate, user))
	}

	return (
		<FormAllyStyles>
			<LandscapeMenu active={2} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='frm-head'>
					<h2>Nuevo aliado</h2>
					<button className='btn-save' onClick={() => true}>
						Guardar
					</button>
				</div>
				<div className='frm-cont'>
					<div className='col-25'>
						<h4>Aliado: </h4>
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
						<h4>Url: </h4>
					</div>
					<div className='col-75'>
						<input
							{...(register && {
								...register('pdf')
							})}
							name='pdf'
							autoComplete='off'
						/>
						{errors && (
							<p className='error-message'>
								{errors?.pdf?.message}
							</p>
						)}
					</div>
					<div className='col-25'>
						<h4>Imagen: </h4>
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
				</div>
			</form>
		</FormAllyStyles>
	)
}

export default AddAlly
