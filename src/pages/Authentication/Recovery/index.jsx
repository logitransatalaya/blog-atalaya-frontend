import React, { useEffect, useState } from 'react'
import { RecoveryStyles } from './Recovery.styles'
import LogoAtalaya from 'assets/images/atalaya.svg'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAlert } from 'react-alert'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { serviceChagePassword, serviceRecovery } from 'store/authApi'
import { AUTH_RECOVERY_INITIALIZED } from 'store/actions'

const schema = yup.object({
	passwordNew: yup
		.string()
		.trim('La contraseña no puede incluir espacios iniciales y finales')
		.strict(true)
		.min(8, 'La contraseña debe tener al menos 8 caracteres')
		.max(255, 'La contraseña no puede exceder los 255 caracteres')
		.required('La contraseña es requerida'),
	passwordConfirmation: yup
		.string()
		.oneOf(
			[yup.ref('passwordNew'), null],
			'Las contraseñas deben coincidir'
		)
})

const Recovery = () => {
	const dispatch = useDispatch()
	const [token, setToken] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})
	const { loading } = useSelector((state) => state.auth)
	const [searchParams] = useSearchParams()

	const onSubmit = (data) => {
		let newPassword = data.passwordNew

		dispatch(serviceChagePassword({ newPassword, token }))
	}

	useEffect(() => {
		setToken(searchParams.get('token'))
	}, [])

	return (
		<RecoveryStyles state={loading}>
			<div className='box-recovery'>
				<div className='box-logo'>
					<img src={LogoAtalaya} alt='' />
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					{2 ? (
						<>
							<h3>Actualiza tu contraseña</h3>
							<div>
								<p className='label-password'>
									Nueva Contraseña
								</p>
								<input
									{...(register && {
										...register('passwordNew')
									})}
									name='passwordNew'
									type='password'
									autoComplete='false'
								/>
								<div className='container-message'>
									{errors && (
										<p className='error-message'>
											{errors?.passwordNew?.message}
										</p>
									)}
								</div>
								<p className='label-password'>
									Confirmar Contraseña
								</p>
								<input
									{...(register && {
										...register('passwordConfirmation')
									})}
									type='password'
									name='passwordConfirmation'
									autoComplete='false'
								/>
								{errors && (
									<p className='error-message'>
										{errors?.passwordConfirmation?.message}
									</p>
								)}
							</div>
							<div className='box-next'>
								<button
									type='submit'
									className='button-loading'
								>
									{loading ? (
										<span className='box-loading'></span>
									) : (
										<span>Siguiente</span>
									)}
								</button>
							</div>
						</>
					) : (
						<>
							<h3>Contraseña actualizada</h3>
							<div className='box-sent-email'>
								<p className='text-message'>
									Hemos actualizado tu contraseña.
								</p>
							</div>
						</>
					)}
				</form>
			</div>
		</RecoveryStyles>
	)
}

export default Recovery
