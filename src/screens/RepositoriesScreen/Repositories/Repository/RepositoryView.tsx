import React from 'react'
import { Repository as RepositoryType } from 'rdx/ducks/repositories'

type PepositoryViewProps = {
  repository: RepositoryType
}

export const RepositoryView: React.FC<PepositoryViewProps> = ({
  repository,
}) => {
  /* eslint-disable @typescript-eslint/camelcase */
  const { name, stargazers_count, watchers_count } = repository

  return (
    <div>
      <p>name: {name}</p>
      <p>stargazers_count: {stargazers_count}</p>
      <p>watchers_count: {watchers_count}</p>
      <hr />
    </div>
  )
}
