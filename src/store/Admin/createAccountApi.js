import axios from 'axios'
import { baseURL } from 'utils/constant'
import {
	CREATE_ACCOUNT_SUCCESS,
	CREATE_ACCOUNT_ERROR,
	SNACKBAR_OPEN
} from 'store/actions'
// third-party

const servicecreateAccount = (data, navigate) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { firstName, lastName, email, password } = data
	try {
		await axios.post(`${baseURL}/api/v1/users/adm`, {
			roleId: 1,
			firstName,
			lastName,
			email,
			password
		})
		dispatch({
			type: SNACKBAR_OPEN,
			message: 'Administrador creado',
			navType: 'success'
		})

		navigate('/admin/posts')
	} catch (error) {
		if (error.response) {
			const { message } = error.response.data

			if (error.response.status == 409) {
				dispatch({
					type: SNACKBAR_OPEN,
					message,
					navType: 'error'
				})
			}
		}
	}
}

export { servicecreateAccount }
