import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormCertificateStyles } from './FormCertificate.styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LandscapeMenu from 'components/LandscapeMenu'


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

const AddCertificate = () => {

	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	const onSubmit = (data) => {
        console.log(data);
		
	}

	return (
		<FormCertificateStyles>
            	<LandscapeMenu active={2} />
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='frm-head'>
					<h2>Nuevo certificado</h2>
					<button
						className='btn-save'
						onClick={() =>
							true
						}
					>
						Guardar
					</button>
				</div>
				<div className='frm-cont'>

            
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
					<h4>Pdf: </h4>
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
		</FormCertificateStyles>
	)
}

export default AddCertificate
