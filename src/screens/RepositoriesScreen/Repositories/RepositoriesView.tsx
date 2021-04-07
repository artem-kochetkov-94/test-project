import React from 'react'
import { Repository } from './Repository'
import { RepositoriesInitialState } from 'rdx/ducks/repositories'

type PepositoriesViewProps = RepositoriesInitialState

export const RepositoriesView: React.FC<PepositoriesViewProps> = ({
  isFetching,
  isFetched,
  data,
}) => {
  if (isFetching) {
    return <p>loading...</p>
  }

  if (isFetched || data) {
    return (
      <div>
        {data &&
          Object.values(data).map((item) => (
            <Repository key={item.id} id={item.id} />
          ))}
      </div>
    )
  }

  return null
}
