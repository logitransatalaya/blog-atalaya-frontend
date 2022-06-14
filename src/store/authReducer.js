// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	loading: false,
	error: false,
	email: ''
}

// ===========================|| AUTH REDUCER ||=========================== //

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_RECOVERY_LOADING:
			return {
				...state,
				loading: true,
				error: false
			}
		case actionTypes.AUTH_RECOVERY_SUCCESS:
			return {
				...state,
				loading: false,
				email: action.email
			}
		case actionTypes.AUTH_RECOVERY_ERROR:
			return {
				...state,
				loading: false,
				error: true
			}
		case actionTypes.AUTH_RECOVERY_INITIALIZED:
			return {
				loading: false,
				error: false
			}
		default:
			return state
	}
}

export default authReducer
