import React from 'react'
import { RepositoriesView } from './RepositoriesView'
import { useSelector } from 'react-redux'
import { AppState } from 'rdx/index'
import * as repositoriesSelectors from 'rdx/ducks/repositories/selectors'

export const Repositories: React.FC<{}> = () => {
  const isFetching = useSelector((state: AppState) =>
    repositoriesSelectors.isFetching(state),
  )
  const isFetched = useSelector((state: AppState) =>
    repositoriesSelectors.isFetched(state),
  )
  const data = useSelector((state: AppState) =>
    repositoriesSelectors.getRepositories(state),
  )

  const props = {
    isFetching,
    isFetched,
    data,
  }

  return <RepositoriesView {...props} />
}
