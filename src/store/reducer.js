import { combineReducers } from 'redux'

// reducer import
import customizationReducer from './customizationReducer'

import NewsReducer from './newsReducer'
import ProfileReducer from './Admin/profileReducer'
import Posts from './Admin/posts/postReducer'
// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
	customization: customizationReducer,
	lastNews: NewsReducer,
	profile: ProfileReducer,
	posts: Posts
})

export default reducer
