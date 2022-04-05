import axios from 'axios'
import { baseURL } from 'utils/constant'
import { GET_NEWS_SUCCESS } from 'store/actions'
import { limit } from 'utils/constant'

const serviceNews = (offset) => async (dispatch) => {
	console.log(offset, 'dd')
	try {
		const response = await axios.get(
			`${baseURL}/api/v1/posts?limit=${limit}&offset=${offset}`
		)
		dispatch({ type: GET_NEWS_SUCCESS, data: response.data })
	} catch (error) {
		console.log(error)
	}
}

export { serviceNews }
