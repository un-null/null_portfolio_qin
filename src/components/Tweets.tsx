import { Button } from '@mantine/core'
import { useFetchTwitter } from 'libs/hooks/useFetchTwitter'
import Link from 'next/link'
import { FC } from 'react'
import { Title } from './Title'
import { Tweet } from './Tweet'

export const Tweets: FC = () => {
  const { tweets, user, media } = useFetchTwitter()

  const newTweets = tweets?.map((tweet) => {
    if (tweet.attachments) {
      const image_urls = tweet.attachments.media_keys?.map((k) => {
        const image = media?.find((u) => u.media_key === k)
        if (image && image.type === 'photo') {
          return image.url
        }
        return undefined
      })
      return {
        ...tweet,
        urls: image_urls,
      }
    }
    return tweet
  })

  return (
    <section className="mx-auto mt-10 h-auto w-full px-4 pb-6 sm:mt-0 sm:w-[768px] md:w-full">
      <Title title="Twitter" />

      <ul className="my-6 flex w-full flex-col items-center justify-center space-y-6">
        {newTweets?.slice(0, 3).map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              name={user?.name}
              username={user?.username}
              profile_image_url={user?.profile_image_url}
              created_at={tweet.created_at}
              text={tweet.text}
              urls={tweet.urls}
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
