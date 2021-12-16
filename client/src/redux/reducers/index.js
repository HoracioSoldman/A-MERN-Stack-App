import {combineReducers} from 'redux'
import { toEditReducer } from './toedit-reducer'

export const appReducer= combineReducers({
    itemToEdit: toEditReducer
})