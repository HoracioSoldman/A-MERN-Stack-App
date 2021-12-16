import {combineReducers} from 'redux'
import { dialogReducer } from './dialog-reducer'

export const appReducer= combineReducers({
    dialog: dialogReducer
})