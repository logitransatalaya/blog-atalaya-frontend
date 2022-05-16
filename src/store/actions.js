// action - account reducer
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const ACCOUNT_INITIALIZE = 'ACCOUNT_INITIALIZE'
export const UNAUTORIZED = 'UNAUTORIZED'
export const FIREBASE_STATE_CHANGED = 'FIREBASE_STATE_CHANGED'

// action - customization reducer
export const SET_MENU = '@customization/SET_MENU'
export const MENU_TOGGLE = '@customization/MENU_TOGGLE'
export const MENU_OPEN = '@customization/MENU_OPEN'
export const MENU_TYPE = '@customization/MENU_TYPE'
export const PRESET_COLORS = '@customization/PRESET_COLORS'
export const THEME_LOCALE = '@customization/THEME_LOCALE'
export const THEME_RTL = '@customization/THEME_RTL'
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY'
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS'
export const SET_OUTLINED_FILLED = '@customization/SET_OUTLINED_FILLED'
export const MODAL_OPEN = '@customization/MODAL_OPEN '

// action - snackbar
export const SNACKBAR_OPEN = '@snackbar/SNACKBAR_OPEN'
export const SNACKBAR_RESET = '@snackbar/SNACKBAR_RESET'

// action - cart

export const ADD_PRODUCTS = '@cart/ADD_PRODUCTS'
export const REMOVE_PRODUCT = '@cart/REMOVE_PRODUCT'
export const UPDATE_QUANTITY = '@cart/UPDATE_QUANTITY'
export const NEXT_STEP = '@cart/NEXT_STEP'
export const BACK_STEP = '@cart/BACK_STEP'
export const SET_STEP = '@cart/SET_STEP'
export const SET_BILLING_ADDRESS = '@cart/SET_BILLING_ADDRESS'
export const SET_DISCOUNT = '@cart/SET_DISCOUNT'
export const SET_SHIPPING_CHARGE = '@cart/SET_SHIPPING_CHARGE'
export const SET_PAYMENT_METHOD = '@cart/SET_PAYMENT_METHOD'
export const SET_PAYMENT_CARD = '@cart/SET_PAYMENT_CARD'
export const RESET_CART = '@cart/RESET_CART'

// action - post reducer
export const GET_NEWS_SUCCESS = '@posts/GET_NEWS_SUCCESS'
export const GET_SEARCH_NEWS_SUCCESS = '@posts/GET_SEARCH_NEWS_SUCCESS'
export const LOADING_SEARCH_NEWS = '@posts/LOADING_SEARCH_NEWS'
export const GET_NEWS_SLUG_SUCCESS = '@post/GET_NEWS_SLUG_SUCCESS'

//action - profile admin
export const GET_PROFILE_SUCCESS = '@profile/GET_PROFILE_SUCCESS'
export const MODIFY_PASSWORD_SUCCESS = '@profile/MODIFY_PASSWORD_SUCCESS'
export const MODIFY_PASSWORD_ERROR = '@profile/MODIFY_PASSWORD_ERROR'
export const MODIFY_PASSWORD_RESET = '@profile/MODIFY_PASSWORD_RESET'

//action - create account
export const CREATE_ACCOUNT_SUCCESS = '@account/CREATE_ACCOUNT_SUCCESS'
export const CREATE_ACCOUNT_ERROR = '@account/CREATE_ACCOUNT_ERROR'

//action -  post admin
export const CREATE_POST_SUCCESS = '@/post/CREATE_POST_SUCCESS'
export const GET_POST_ERROR = '@/post/GET_POST_ERROR'
export const CREATE_POST_ERROR = '@/post/CREATE_POST_ERROR'
export const CREATE_POST_RESET = '@/post/CREATE_POST_RESET'
export const GET_POSTS_SUCCESS = '@/post/GET_POSTS_SUCCESS'
export const GET_POST_SLUG_SUCCESS = '@/post/GET_POST_SLUG_SUCCESS'
export const UPDATE_POST_SLUG_SUCCESS = '@/post/UPDATE_POST_SLUG_SUCCESS'
export const DELETE_POST_SLUG_SUCCESS = '@/post/DELETE_POST_SLUG_SUCCESS'
