import React, { useState, ChangeEvent, useEffect } from 'react'
import { SearchFormView } from './SearchFormView'
import { useDispatch } from 'react-redux'
import { fetchRepositories } from 'rdx/ducks/repositories'
import { useDebounce } from 'src/hooks'
import { abortableFetch } from 'rdx/ducks/repositories'
import { AsyncThunkAction } from '@reduxjs/toolkit'

export const SearchForm: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  const fetchData = (searchTerm: string) =>
    dispatch(fetchRepositories(searchTerm))

  const debouncedSearchTerm = useDebounce(
    searchTerm,
    500,
    abortableFetch.abort,
    3,
  )

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (!debouncedSearchTerm) {
      return
    }

    fetchData(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  return <SearchFormView onChange={onChange} />
}
