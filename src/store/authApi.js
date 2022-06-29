import axios from 'axios'

const {
	AUTH_RECOVERY_LOADING,
	AUTH_RECOVERY_SUCCESS,
	AUTH_RECOVERY_ERROR,
	SNACKBAR_OPEN,
	LOGOUT
} = require('./actions')

const serviceRecovery = (email) => async (dispatch) => {
	try {
		dispatch({ type: AUTH_RECOVERY_LOADING })

		await axios.post(`/api/v1/auth/recovery`, {
			email
		})

		dispatch({ type: AUTH_RECOVERY_SUCCESS, email })
	} catch (error) {
		dispatch({
			type: SNACKBAR_OPEN,
			message: 'Not authorized',
			navType: 'error'
		})
		dispatch({ type: AUTH_RECOVERY_ERROR })
	}
}

const serviceChagePassword = (data) => async (dispatch) => {
	try {
		dispatch({ type: AUTH_RECOVERY_LOADING })
		let { token, newPassword } = data
		await axios.post(`/api/v1/auth/change-password-token`, {
			token,
			newPassword
		})
		dispatch({ type: AUTH_RECOVERY_SUCCESS, updatedPassword: true })
	} catch (error) {
		dispatch({
			type: SNACKBAR_OPEN,
			message: 'Not authorized',
			navType: 'error'
		})
		dispatch({ type: AUTH_RECOVERY_ERROR })
	}
}
export { serviceRecovery, serviceChagePassword }
