import axios from 'axios'
import { GET_CERTIFICATES_SUCCESS } from 'store/actions'
import { baseURL,  } from 'utils/constant'


const serviceGetCertificates = () => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/adm/certificates`
		)
	
		dispatch({ type: GET_CERTIFICATES_SUCCESS, data })
		
	} catch (error) {
		console.log(error)
	}
}

export {serviceGetCertificates}
