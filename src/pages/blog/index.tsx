import { Button } from '@mantine/core'
import { Layout } from 'components/Layout'
import { Posts } from 'components/Posts'
import { Title } from 'components/Title'
import { NextPage } from 'next'

const Blog: NextPage = () => {
  return (
    <Layout label="Blog" description="This page is about null blog page">
      <section className="mx-auto my-8 h-auto max-w-screen-lg space-y-4 px-4">
        <Posts />
      </section>
    </Layout>
  )
}

export default Blog
