import { Layout, Post } from 'components'
import { client } from 'libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { Blog } from 'types'

import InfiniteScroll from 'react-infinite-scroller'
import { Loader } from '@mantine/core'

type Props = MicroCMSListResponse<Blog>

const Blog: NextPage<Props> = ({ contents }) => {
  const [blogs, setBlogs] = useState<Blog[]>(contents)
  const [hasmore, setHasMore] = useState<boolean>(true)

  const getMorePost = async (pageStart: number) => {
    const data = await fetch('/api/getPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ limit: 3, offset: pageStart * 3 }),
    })
    const json: Blog[] = await data.json()

    if (json.length < 1) {
      setHasMore(false)
      return
    }

    setBlogs([...blogs, ...json])
  }

  return (
    <Layout label="Blog" description="This page is about null blog page">
      <section className="mx-auto my-8 h-auto max-w-screen-lg space-y-4 px-4">
        <InfiniteScroll
          initialLoad={false}
          loadMore={getMorePost}
          hasMore={hasmore}
          loader={<Loader key="loader" color="pink" />}
        >
          <ul className="my-6 space-y-6">
            {blogs.map((post) => {
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
        </InfiniteScroll>
      </section>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 3 },
  })

  return {
    props: data,
  }
}
