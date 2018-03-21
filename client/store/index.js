import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import adventure from './adventure'
import location from './location'
import authUser from './authUser'
import axios from 'axios'


export const devAxios = axios.create({
<<<<<<< HEAD
  baseURL: 'https://92411875.ngrok.io'
=======
  baseURL: 'https://71a85b90.ngrok.io'
>>>>>>> master
})

const reducer = combineReducers({ authUser, adventure, location })

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)

export default store;
export * from './authUser'
export * from './adventure'
export * from './location'

