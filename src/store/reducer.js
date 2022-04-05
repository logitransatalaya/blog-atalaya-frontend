import { combineReducers } from 'redux'

// reducer import
import customizationReducer from './customizationReducer'
import NewsReducer from './newsReducer'

// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
	customization: customizationReducer,
	lastNews: NewsReducer
})

export default reducer
