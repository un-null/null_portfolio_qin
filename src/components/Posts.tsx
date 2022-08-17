import { FC } from 'react'
import { Buttons } from './Buttons'
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

      <Buttons label="View All" />
    </section>
  )
}
