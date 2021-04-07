import React from 'react'
import { Repositories } from './Repositories'
import { SearchForm } from './SearchForm'

export const RepositoriesScreen: React.FC<{}> = () => {
  return (
    <>
      <SearchForm />
      <Repositories />
    </>
  )
}
