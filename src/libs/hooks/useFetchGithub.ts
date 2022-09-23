import useSWR from 'swr'
import { Repositories } from 'types'
import { fetcher } from 'utils/fetcher'

export const useFetchGithub = () => {
  const { data, error } = useSWR<Repositories, Error>(
    process.env.NEXT_PUBLIC_HOSTNAME + '/api/github/un-null',
    fetcher,
    { suspense: true }
  )

  const repos = data && data.user.repositories.edges

  return {
    repos,
    error,
  }
}
