import React from 'react'
import { RepositoryView } from './RepositoryView'
import { useSelector } from 'react-redux'
import { AppState } from 'rdx/index'
import * as repositoriesSelectors from 'rdx/ducks/repositories/selectors'

export type RepositoryProps = {
  id: number
}

export const Repository: React.FC<RepositoryProps> = ({ id }) => {
  const repository = useSelector((state: AppState) =>
    repositoriesSelectors.getRepositoryById(state, id),
  )

  return <RepositoryView repository={repository} />
}
