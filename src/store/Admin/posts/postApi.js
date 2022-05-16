import axios from 'axios'
import { baseURL, limit } from 'utils/constant'
import {
	CREATE_POST_SUCCESS,
	CREATE_POST_ERROR,
	GET_POSTS_SUCCESS,
	GET_POST_SLUG_SUCCESS,
	UPDATE_POST_SLUG_SUCCESS,
	SNACKBAR_OPEN
} from 'store/actions'
// third-party
import jwtDecode from 'jwt-decode'

const servicecreatePost = (data) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { sub } = jwtDecode(token)
	const { content, description, slug, status, title, image } = data
	try {
		const response = await axios.post(`${baseURL}/api/v1/adm/posts/`, {
			authorId: sub,
			content,
			description,
			slug,
			status,
			title,
			image
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
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/adm/posts?limit=${20}&offset=${offset}`
		)
		if (Array.isArray(data)) {
			let endPost = data.length == 0 ? true : false
			dispatch({ type: GET_POSTS_SUCCESS, data, page: offset, endPost })
		}
	} catch (error) {
		console.log(error)
	}
}

const serviceGetPostBySlug = (slug) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(`${baseURL}/api/v1/adm/posts/${slug}`)

		dispatch({ type: GET_POST_SLUG_SUCCESS, data })
	} catch (error) {
		console.log(error)
	}
}

const serviceUpdatePost = (data) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	const { sub } = jwtDecode(token)
	const { content, description, slug, status, title, slugEdit, image } = data
	try {
		const { data } = await axios.patch(
			`${baseURL}/api/v1/adm/posts/${slugEdit}`,
			{
				authorId: sub,
				content,
				description,
				slug,
				status,
				title,
				image
			}
		)

		dispatch({ type: UPDATE_POST_SLUG_SUCCESS, data })
		dispatch({
			type: SNACKBAR_OPEN,
			navType: 'error',
			message: 'POST UPDATE'
		})
	} catch (error) {
		console.log(error)
	}
}
export {
	servicecreatePost,
	serviceGetPosts,
	serviceGetPostBySlug,
	serviceUpdatePost
}
