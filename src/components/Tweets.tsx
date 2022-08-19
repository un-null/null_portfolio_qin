import { Button } from '@mantine/core'
import { IconUser } from '@tabler/icons'
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
    <section className="w-full sm:w-[768px] md:w-full h-auto mx-auto my-8 px-4">
      <Title title="Twitter" />

      <ul className="w-full flex flex-col justify-center items-center space-y-6 mt-6">
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

      <Button
        color="dark"
        size="md"
        radius="xl"
        className="block"
        mt={40}
        mx="auto"
      >
        View on Twitter
      </Button>
    </section>
  )
}
