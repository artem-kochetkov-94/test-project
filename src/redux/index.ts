import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './ducks'
import { thunkMiddleware } from './middlewares'

const defaultMiddleware = getDefaultMiddleware({
  thunk: true,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [...defaultMiddleware, thunkMiddleware],
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
