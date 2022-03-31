import React, { useState } from 'react'
import useAuth from 'hooks/useAuth'
import { LoginStyles } from './Login.styles'

const Login = () => {
	const { login } = useAuth()
	const [values, setvalues] = useState({})

	const onSubmit = () => {
		if (values.email && values.password) {
			login(values.email, values.password)
		} else {
			alert('Email and password is required')
		}
	}
	return (
		<LoginStyles>
			<h1>Login</h1>

			<input
				placeholder='Email'
				type='email'
				onChange={(e) =>
					setvalues({ ...values, email: e.target.value })
				}
			/>
			<input
				placeholder='Password'
				type='password'
				onChange={(e) =>
					setvalues({ ...values, password: e.target.value })
				}
			/>
			<button onClick={onSubmit}>Sign in</button>
		</LoginStyles>
	)
}

export default Login
