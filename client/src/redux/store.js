import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import { appReducer } from './reducers'

const middleware= [thunk]
export const store= createStore(appReducer, applyMiddleware(...middleware))

