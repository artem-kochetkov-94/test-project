export interface Repository {
  id: number
  name: string
  stargazers_count: number
  watchers_count: number
}

export type Data = {
  [key: string]: Repository
}

export interface RepositoriesInitialState {
  data: Data
  isFetching: boolean
  isFetched: boolean
}
