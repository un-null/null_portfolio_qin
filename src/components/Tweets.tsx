import { Button } from '@mantine/core'
import Link from 'next/link'
import { FC } from 'react'
import { TwiiterData } from 'types'
import { Title } from './Title'
import { Tweet } from './Tweet'

type Props = TwiiterData

export const Tweets: FC<Props> = ({ user, tweets }) => {
  console.log(tweets.data)

  return (
    <section className="mx-auto mt-10 h-auto w-full px-4 pb-6 sm:mt-0 sm:w-[768px] md:w-full">
      <Title title="Twitter" />

      <ul className="my-6 flex w-full flex-col items-center justify-center space-y-6">
        {tweets?.data?.slice(0, 3).map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              name={user.data?.name}
              username={user.data?.username}
              profile_image_url={user.data?.profile_image_url}
              created_at={tweet.created_at}
              text={tweet.text}
            />
          )
        })}
      </ul>

      <Link href="/" passHref>
        <Button
          component="a"
          radius="xl"
          className="block h-11 w-40 bg-[#25262B] hover:bg-[#0c0c13]"
          mx="auto"
        >
          View on Twitter
        </Button>
      </Link>
    </section>
  )
}
