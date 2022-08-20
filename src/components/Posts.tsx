import { Button } from '@mantine/core'
import Link from 'next/link'
import { FC } from 'react'
import { Blog } from 'types'
import { Post } from './Post'
import { Title } from './Title'

const PostContent: Blog[] = [
  {
    id: 1,
    title: 'This is Header',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    created_at: '2022.7.11',
  },
  {
    id: 2,
    title: 'This is Header',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    created_at: '2022.7.11',
  },
  {
    id: 3,
    title: 'This is Header',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    created_at: '2022.7.11',
  },
  {
    id: 4,
    title: 'This is Header',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    created_at: '2022.7.11',
  },
  {
    id: 5,
    title: 'This is Header',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    created_at: '2022.7.11',
  },
]

export const Posts: FC = () => {
  return (
    <section className="mx-auto mt-10 h-auto max-w-screen-lg px-4 pb-6 sm:mt-20">
      <Title title="Blog" />

      <ul className="my-6 space-y-6">
        {PostContent.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              created_at={post.created_at}
            />
          )
        })}
      </ul>

      <Link href="/blog" passHref>
        <Button
          component="a"
          radius="xl"
          className="block h-11 w-28 bg-[#25262B]"
          mx="auto"
        >
          View All
        </Button>
      </Link>
    </section>
  )
}
