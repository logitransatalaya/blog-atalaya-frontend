import axios from 'axios'
import { GET_ALLIES_LOADING, GET_ALLIES_SUCCESS } from './actions'

const serviceGetAllies = () => async (dispatch) => {
	dispatch({ type: GET_ALLIES_LOADING })
	try {
		const { data } = await axios.get(`/api/v1/allies`)

		dispatch({ type: GET_ALLIES_SUCCESS, data })
	} catch (error) {}
}

export { serviceGetAllies }
