// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	allies: [],
	allyId: null,
	allyNotFound: false
}

// ===========================|| ALLIES REDUCER ||=========================== //

const alliesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_ALLY_SUCCESS:
			let newAlly = action.data
			return {
				...state,
				allies: [newAlly, ...state.allies]
			}
		case actionTypes.GET_ALLIES_SUCCESS:
			return {
				...state,
				allies: action.data
			}
		case actionTypes.GET_ALLY_ID_SUCCESS:
			return {
				...state,
				allyId: action.data
			}
		case actionTypes.GET_ALLY_ID_ERROR:
			return {
				...state,
				allyNotFound: true
			}
		case actionTypes.UPDATE_ALLY_ID_SUCCESS:
			let ally = action.data
			return {
				...state,
				allies: state.allies.map((item) =>
					item.id === ally.id ? ally : item
				)
			}
		case actionTypes.RESET_CERTIFICATE:
			return {
				...state,
				allyId: null,
				allyNotFound: false
			}

		case actionTypes.DELETE_CERTIFICATE_ID_SUCCESS:
			let id = action.id

			return {
				...state,
				allies: state.allies.filter((item) => item.id !== id)
			}

		default:
			return state
	}
}

export default alliesReducer
