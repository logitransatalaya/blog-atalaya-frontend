import axios from 'axios'
import { baseURL } from 'utils/constant'

const {
	AUTH_RECOVERY_LOADING,
	AUTH_RECOVERY_SUCCESS,
	AUTH_RECOVERY_ERROR,
	SNACKBAR_OPEN
} = require('./actions')

const serviceRecovery = (email) => async (dispatch) => {
	try {
		dispatch({ type: AUTH_RECOVERY_LOADING })

		const { data } = await axios.post(`${baseURL}/api/v1/auth/recovery`, {
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
		let { toke, newPassword } = data
		const response = await axios.post(
			`${baseURL}/api/v1/auth/change-password-token`,
			{ toke, newPassword }
		)
		dispatch({ type: AUTH_RECOVERY_SUCCESS })
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
