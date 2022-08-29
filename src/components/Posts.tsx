import { Button } from '@mantine/core'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import Link from 'next/link'
import { FC } from 'react'
import { Blog } from 'types'
import { Post } from './Post'
import { Title } from './Title'

type Props = MicroCMSListResponse<Blog>

export const Posts: FC<Props> = (props) => {
  return (
    <section className="mx-auto mt-10 h-auto max-w-screen-lg px-4 pb-6 sm:mt-20">
      <Title title="Blog" />

      <ul className="my-6 space-y-6">
        {props.contents.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              created_at={post.created_at}
            />
          )
        })}
      </ul>

      <Link href="/blog" passHref>
        <Button
          component="a"
          radius="xl"
          className="block h-11 w-28 bg-[#25262B] hover:bg-[#0c0c13]"
          mx="auto"
        >
          View All
        </Button>
      </Link>
    </section>
  )
}
