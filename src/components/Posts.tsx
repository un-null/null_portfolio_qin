import { FC } from 'react'
import { Buttons } from './Buttons'
import { Post } from './Post'

export const Posts: FC = () => {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      <Buttons label="View All" />
    </div>
  )
}
