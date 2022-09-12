import { Button } from '@mantine/core'
import Link from 'next/link'
import { FC } from 'react'
import useSWR from 'swr'
import { TwitterData } from 'types'
import { Title } from './Title'
import { Tweet } from './Tweet'

export const Tweets: FC = () => {
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json())

  const { data, error } = useSWR<TwitterData, Error>(
    '/api/getTwitterData',
    fetcher
  )

  if (error) alert(error.message)

  return (
    <section className="mx-auto mt-10 h-auto w-full px-4 pb-6 sm:mt-0 sm:w-[768px] md:w-full">
      <Title title="Twitter" />

      <ul className="my-6 flex w-full flex-col items-center justify-center space-y-6">
        {data?.tweets.data?.slice(0, 3).map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              name={data.user.data?.name}
              username={data.user.data?.username}
              profile_image_url={data.user.data?.profile_image_url}
              created_at={tweet.created_at}
              text={tweet.text}
            />
          )
        })}
      </ul>

      <Link href="/" passHref>
        <a>
          <Button
            radius="xl"
            className="block h-11 w-40 bg-[#25262B] hover:bg-[#0c0c13]"
            mx="auto"
          >
            View on Twitter
          </Button>
        </a>
      </Link>
    </section>
  )
}
