import { combineReducers } from '@reduxjs/toolkit'
import { repositoriesReducer } from './repositories'

export const rootReducer = combineReducers({
  repositories: repositoriesReducer,
})
