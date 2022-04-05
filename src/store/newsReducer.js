// action - state management
import * as actionTypes from './actions'

export const initialState = {
	news: []
}

// ===========================|| NEWS REDUCER ||=========================== //

const newsReducer = (state = initialState, action) => {
	let id
	switch (action.type) {
		case actionTypes.GET_NEWS_SUCCESS:
			return {
				...state,
				news: [...state.news, ...action.data]
			}

		default:
			return state
	}
}

export default newsReducer
