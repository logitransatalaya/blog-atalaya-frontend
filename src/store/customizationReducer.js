// project imports
import config from 'config.js'

// action - state management
import * as actionTypes from './actions'

export const initialState = {
	isOpen: [], // for active default menu
	fontFamily: config.fontFamily,
	borderRadius: config.borderRadius,
	outlinedFilled: config.outlinedFilled,
	navType: config.theme,
	presetColor: config.presetColor,
	locale: config.i18n,
	rtlLayout: config.rtlLayout,
	opened: true,
	modalOpen: false,
	scroll: { key: '', val: false }
}

// ===========================|| CUSTOMIZATION REDUCER ||=========================== //

const customizationReducer = (state = initialState, action) => {
	let id
	switch (action.type) {
		case actionTypes.MENU_OPEN:
			id = action.id
			return {
				...state,
				isOpen: [id]
			}
		case actionTypes.MODAL_OPEN:
			return {
				...state,
				modalOpen: action.modalOpen
			}
		case actionTypes.SCROLL_TOP:
			return {
				...state,
				scroll: action.scroll
			}
		default:
			return state
	}
}

export default customizationReducer
