import axios from 'axios'
import { baseURL, limit } from 'utils/constant'
import {
	CREATE_POST_SUCCESS,
	CREATE_POST_ERROR,
	GET_POSTS_SUCCESS
} from 'store/actions'
// third-party
import jwtDecode from 'jwt-decode'

const servicecreatePost = (data) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { sub } = jwtDecode(token)
	const { content, description, slug, status, title } = data
	try {
		const response = await axios.post(`${baseURL}/api/v1/adm/posts/`, {
			authorId: sub,
			content,
			description,
			slug,
			status,
			title
		})

		dispatch({
			type: CREATE_POST_SUCCESS,
			message: 'Post created'
		})
	} catch (error) {
		if (error.response) {
			const { message } = error.response.data
			dispatch({ type: CREATE_POST_ERROR, message })

			if (error.response.status == 401) {
				dispatch({ type: CREATE_POST_ERROR, message: ' Unauthorized' })
				//logout
			}
		} else if (error.request) {
			dispatch({
				type: CREATE_POST_ERROR,
				message: ' The request was made but no response was received'
			})
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error ', error.message)
		}
	}
}

const serviceGetPosts = (offset) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/posts?limit=${limit}&offset=${offset}`
		)
		if (Array.isArray(data)) {
			dispatch({ type: GET_POSTS_SUCCESS, data })
		}
	} catch (error) {
		console.log(error)
	}
}

export { servicecreatePost, serviceGetPosts }
