import { Button } from '@mantine/core'
import { FC } from 'react'
import { Title } from './Title'
import { Tweet } from './Tweet'

export const Tweets: FC = () => {
  return (
    <section className="w-full sm:w-[768px] md:w-full h-auto mx-auto my-8 px-4 space-y-4">
      <Title title="Twitter" />

      <div className="w-full flex flex-col justify-center items-center space-y-2">
        <Tweet />
        <Tweet />
        <Tweet />

        <div className="w-full h-auto grid place-items-center">
          <Button color="dark" size="md" radius="xl" className="my-4">
            View on Twitter
          </Button>
        </div>
      </div>
    </section>
  )
}
