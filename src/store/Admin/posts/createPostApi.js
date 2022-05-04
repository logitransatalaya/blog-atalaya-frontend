import axios from 'axios'
import { baseURL } from 'utils/constant'
//import { CREATE_POST_SUCCESS, CREATE_POST_ERROR } from 'store/actions'
// third-party
import jwtDecode from 'jwt-decode'

const servicecreatePost = (data) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { sub } = jwtDecode(token)
	const { content, description, slug, status, title } = data
	try {
		const response = await axios.post(`${baseURL}/api/v1/posts/`, {
			authorId: sub,
			content,
			description,
			slug,
			status,
			title
		})
		console.log('ERRor')
		console.log('Respuesta => ', response)
		//dispatch({ type: CREATE_POST_SUCCESS, data: response.data })
	} catch (error) {
		console.log('Error', error)
		if (error.response) {
			// Request made and server responded
			console.log(error.response.data)
			console.log(error.response.status)
			console.log(error.response.headers)
		} else if (error.request) {
			// The request was made but no response was received
			console.log(error.request)
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message)
		}
	}
}

export { servicecreatePost }
