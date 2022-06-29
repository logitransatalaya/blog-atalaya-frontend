import React, { useEffect } from 'react'
import { ForgotStyles } from './Forgot.styles'
import LogoAtalaya from 'assets/images/atalaya.svg'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { serviceRecovery } from 'store/authApi'
import { AUTH_RECOVERY_INITIALIZED } from 'store/actions'

const schema = yup.object({
	email: yup
		.string()
		.email('Formato de usuario inválido')
		.required('El usuario es requerido')
})

const Forgot = () => {
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})
	const { loading, email } = useSelector((state) => state.auth)

	const onSubmit = (data) => {
		let client = window.location.host
		dispatch(serviceRecovery(data.email, client))
	}

	useEffect(() => {
		dispatch({ type: AUTH_RECOVERY_INITIALIZED })
	}, [])

	return (
		<ForgotStyles state={loading}>
			<div className='box-recovery'>
				<div className='box-logo'>
					<img src={LogoAtalaya} alt='' />
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					{!email ? (
						<>
							<h3>Recupera tu cuenta</h3>
							<div className='box-txt'>
								<p>Ingresa tu corrreo electronico.</p>
							</div>
							<div>
								<input
									{...(register && { ...register('email') })}
									placeholder='Email'
									name='email'
									type='email'
								/>
								<div className='container-message'>
									{errors && (
										<p className='error-message'>
											{errors?.email?.message}
										</p>
									)}
								</div>
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
							<h3>Correo electrónico enviado</h3>
							<div className='box-sent-email'>
								<p className='text-message'>
									Hemos enviado un correo electrónico a{' '}
									{email} con un enlace para que recuperes el
									acceso a tu cuenta.
								</p>
							</div>
						</>
					)}
				</form>
			</div>
		</ForgotStyles>
	)
}

export default Forgot
