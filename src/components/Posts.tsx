import { Button } from '@mantine/core'
import { FC } from 'react'
import { Post } from './Post'
import { Title } from './Title'

export const Posts: FC = () => {
  return (
    <section className="max-w-screen-lg h-auto mx-auto my-8 px-4 space-y-4">
      <Title title="Blog" />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      <div className="w-full h-auto grid place-items-center">
        <Button color="dark" size="md" radius="xl" className="my-4">
          View All
        </Button>
      </div>
    </section>
  )
}
