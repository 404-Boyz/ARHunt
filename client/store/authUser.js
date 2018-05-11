import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { StackNavigator, navigationOptions, NavigationActions } from 'react-navigation'
import { devAxios } from './index'
import { RootStack } from '../components/Navigator'
import NavigationService from '../components/NavigationService';



/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const user = {}

/**
 * ACTION CREATORS
 */
export const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })

/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch => {
    devAxios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || user)))
      .catch(err => console.log(err))
  }


export const authLogIn = (userName, password) =>
  dispatch => {
    devAxios.post('/auth/login', { userName, password })
      .then(res => {
        dispatch(getUser(res.data));
        AsyncStorage.setItem('user', JSON.stringify(res.data));
        NavigationService.navigate('Intro')
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))
  }

export const authSignUp = (info) =>
  dispatch => {
    devAxios.post('/auth/signup', info)
      .then(res => {
        dispatch(getUser(res.data));
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))
  }

export const logout = () =>
  dispatch =>
    devAxios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser());
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = user, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return user
    default:
      return state
  }
}
