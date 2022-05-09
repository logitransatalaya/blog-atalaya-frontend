// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	posts: [],
	error: null,
	message: null
}

// ===========================|| POSTS REDUCER ||=========================== //

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_POST_SUCCESS:
			return {
				...state,
				error: false,
				message: action.message
			}
		case actionTypes.CREATE_POST_ERROR:
			return {
				...state,
				error: true,
				message: action.message
			}
		case actionTypes.CREATE_POST_RESET:
			return {
				...state,
				error: false,
				message: null
			}
		case actionTypes.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: [...state.posts, ...action.data]
			}
		default:
			return state
	}
}

export default postsReducer
