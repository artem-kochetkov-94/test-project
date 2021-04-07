import { createSelector } from '@reduxjs/toolkit'
import type { AppState } from 'rdx/index'

const getIdFromProps = (state: AppState, id: number) => id

export const isFetching = createSelector(
  (state: AppState) => state.repositories.isFetching,
  (isFetching) => isFetching,
)

export const isFetched = createSelector(
  (state: AppState) => state.repositories.isFetching,
  (isFetched) => isFetched,
)

export const getRepositories = createSelector(
  (state: AppState) => state.repositories.data,
  (people) => people,
)

export const getRepositoryById = createSelector(
  [getRepositories, getIdFromProps],
  (repositories, id) => {
    return repositories[id]
  },
)
