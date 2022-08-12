import { Button } from '@mantine/core'
import { Layout } from 'components/Layout'
import { Post } from 'components/Post'
import { Title } from 'components/Title'
import { NextPage } from 'next'

const Blog: NextPage = () => {
  return (
    <Layout label="Blog">
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
    </Layout>
  )
}

export default Blog
