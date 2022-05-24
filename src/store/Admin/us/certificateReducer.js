// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	certificates: [],
	
}


// ===========================|| CERTIFICATES REDUCER ||=========================== //

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_CERTIFICATES_SUCCESS:
		
			return {
				...state,
				certificates: action.data
			}
	

		default:
			return state
	}
}

export default postsReducer
