// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	allies: [],
	allyId: null,
	allyNotFound: false,
	loading: false
}

// ===========================|| ALLIES REDUCER ||=========================== //

const alliesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALLIES_SUCCESS:
			return {
				...state,
				allies: action.data,
				loading: false
			}

		case actionTypes.GET_ALLIES_LOADING:
			return {
				...state,
				loading: true
			}
		case actionTypes.GET_ALLIES_ERRROR:
			return {
				...state,
				loading: false
			}
		default:
			return state
	}
}

export default alliesReducer
