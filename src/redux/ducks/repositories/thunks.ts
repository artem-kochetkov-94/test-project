import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAbortable } from 'src/utils/getAbortable'

export const abortableFetch = getAbortable()

export const fetchRepositories = createAsyncThunk(
  'repositories/fetch',
  async (search: string) => {
    const data = await abortableFetch
      .fetch(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        return response
      })
      .then((response) => {
        return response.json()
      })
      .then(({ items }) => {
        return items
      })
      .catch((e) => {
        return []
      })

    return data
  },
)
