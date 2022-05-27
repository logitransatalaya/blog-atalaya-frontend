import { combineReducers } from 'redux'

// reducer import
import customizationReducer from './customizationReducer'

import NewsReducer from './newsReducer'
import ProfileReducer from './Admin/profileReducer'
import Posts from './Admin/posts/postReducer'
import snackbarReducer from './snackbarReducer'
import usReducer from './Admin/us/usReducer'
import certificateReducer from './Admin/us/certificateReducer'
import alliesReducer from './Admin/allyReducer'

// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
	customization: customizationReducer,
	lastNews: NewsReducer,
	profile: ProfileReducer,
	posts: Posts,
	snackbar: snackbarReducer,
	us: usReducer,
	certificate: certificateReducer,
	ally: alliesReducer
})

export default reducer
