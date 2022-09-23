import axios from 'axios'
import useSWR from 'swr'
import { Repositories } from 'types'

export const useFetchGithub = () => {
  const fetcher = (url: string): Promise<any> => {
    return axios.get(url).then((res) => res.data)
  }

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
