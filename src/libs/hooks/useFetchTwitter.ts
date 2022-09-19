import axios from 'axios'
import useSWR from 'swr'
import { TwitterData } from 'types'

export const useFetchTwitter = () => {
  const fetcher = (url: string): Promise<any> => {
    return axios.get(url).then((res) => res.data)
  }

  const { data, error } = useSWR<TwitterData, Error>(
    process.env.NEXT_PUBLIC_HOSTNAME + '/api/getTwitterData',
    fetcher,
    { suspense: true }
  )

  if (error) throw new Error(error.message)

  const user = data?.user.data

  const tweets: {
    attachments?:
      | {
          media_keys?: string[] | undefined
          poll_ids?: string[] | undefined
        }
      | undefined
    id: string
    text: string
    created_at: string
    urls: string[] | undefined
  }[] = data?.tweets.data as any

  const media:
    | {
        height?: number | undefined
        media_key?: string | undefined
        type: string
        width?: number | undefined
        url: string
      }[]
    | undefined = data?.tweets.includes?.media as any

  return {
    tweets,
    user,
    media,
    error,
  }
}
