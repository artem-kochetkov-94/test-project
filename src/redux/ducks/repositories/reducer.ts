import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RepositoriesInitialState, Repository, Data } from './'
import { fetchRepositories } from './thunks'

const initialState: RepositoriesInitialState = {
  isFetching: false,
  isFetched: false,
  data: {},
}

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRepositories.pending.toString()]: (state, action) => {
      state.isFetching = true
      state.isFetched = false
      return state
    },
    [fetchRepositories.fulfilled.toString()]: (
      state,
      { payload = [] }: PayloadAction<Repository[] | []>,
    ) => {
      state.isFetching = false
      state.isFetched = true
      state.data = (payload as Repository[]).reduce(
        (accomulator: Data, currentValue: Repository): Data => {
          return {
            ...accomulator,
            [currentValue.id]: currentValue,
          }
        },
        {},
      )
      return state
    },
    [fetchRepositories.rejected.toString()]: (state, action) => {
      state.isFetching = false
      state.isFetched = false
      return state
    },
  },
})

export const repositoriesReducer = repositoriesSlice.reducer
export const repositoriesActions = repositoriesSlice.actions
