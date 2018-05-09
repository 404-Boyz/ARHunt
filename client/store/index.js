import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import adventure from './adventure'
import location from './location'
import authUser from './authUser'
import geoPosition from './geoPosition'
import axios from 'axios'


export const devAxios = axios.create({
  baseURL: 'https://deb27dda.ngrok.io'
})

const reducer = combineReducers({ authUser, adventure, location, geoPosition })

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))

const store = createStore(reducer, middleware)

export default store;
export * from './authUser'
export * from './adventure'
export * from './location'
export * from './geoPosition'

