import axios from 'axios'
import { StackNavigator, navigationOptions } from 'react-navigation'

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
const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })

/**
 * THUNK CREATORS
 */
export const me = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || user)))
      .catch(err => console.log(err))

export const auth = (userName, password, method) =>
  dispatch =>
    axios.post(`/auth/${method}`, { userName, password })
      .then(res => {
        dispatch(getUser(res.data))
        props.this.props.navigation.navigate('Home')
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(_ => {
        dispatch(removeUser())
        history.push('/login')
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
