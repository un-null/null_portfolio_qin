import { Button } from '@mantine/core'
import { IconUser } from '@tabler/icons'
import Link from 'next/link'
import { FC } from 'react'
import { Twitter } from 'types'
import { Title } from './Title'
import { Tweet } from './Tweet'

const tweets: Twitter[] = [
  {
    id: 1,
    username: 'null',
    user_id: 'un_null',
    created_at: '5月25日',
    avatar: <IconUser size={18} />,
  },
  {
    id: 2,
    username: 'null',
    user_id: 'un_null',
    created_at: '5月25日',
    avatar: <IconUser size={18} />,
  },
  {
    id: 3,
    username: 'null',
    user_id: 'un_null',
    created_at: '5月25日',
    avatar: <IconUser size={18} />,
  },
]

export const Tweets: FC = () => {
  return (
    <section className="mx-auto mt-10 h-auto w-full px-4 pb-6 sm:mt-0 sm:w-[768px] md:w-full">
      <Title title="Twitter" />

      <ul className="my-6 flex w-full flex-col items-center justify-center space-y-6">
        {tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              username={tweet.username}
              user_id={tweet.user_id}
              created_at={tweet.created_at}
              avatar={tweet.avatar}
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
