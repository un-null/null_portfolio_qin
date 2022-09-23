import useSWR from 'swr'
import { TwitterData } from 'types'
import { fetcher } from 'utils/fetcher'

export const useFetchTwitter = () => {
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
