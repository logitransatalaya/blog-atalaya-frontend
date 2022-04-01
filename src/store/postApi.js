import axios from 'axios'
import { baseURL } from 'utils/constant'
import { MENU_OPEN } from 'store/actions'

const servicePost = () => async (dispatch) => {
	try {
		const response = await axios.get(`${baseURL}/api/v1/posts/`)
		dispatch({ type: MENU_OPEN, id: response.data })
	} catch (error) {
		console.log(error)
	}
}

export { servicePost }
