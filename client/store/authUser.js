import axios from 'axios'
import { StackNavigator, navigationOptions } from 'react-navigation'

const server = 'http://localhost:4040';

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
  dispatch => {
    console.log('IN ME THUNK')
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || user)))
      .catch(err => console.log(err))
  }

export const auth = (userName, password, method) =>
  dispatch => {
    console.log(userName, password, method)
    fetch(`${server}/auth/${method}`, {
      method: 'POST',
      body: {
        userName: userName,
        password: password
      }
    }
    )
      .then(res => {
        console.log('THUNKING IT UP. RES: ', res)
        dispatch(getUser(res.data))
        props.this.props.navigation.navigate('Home')
      }, authError => { // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }))
      })
      .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))
  }


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
export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      console.log('IN REDUCER!!!', action)
      return action.user
    case REMOVE_USER:
      return user
    default:
      return state
  }
}
