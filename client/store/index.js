import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import adventure from './adventure'
import location from './location'
import authUser from './authUser'
import axios from 'axios'


export const devAxios = axios.create({
  baseURL: 'https://9341d8a3.ngrok.io'
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

