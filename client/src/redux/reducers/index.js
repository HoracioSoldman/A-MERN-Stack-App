import {combineReducers} from 'redux'
import { pgTitleReducer } from './pagetitle-reducer'

export const appReducer= combineReducers({
    pageTitle: pgTitleReducer
})