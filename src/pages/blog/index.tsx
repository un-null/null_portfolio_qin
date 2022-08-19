import { Button } from '@mantine/core'
import { Layout } from 'components/Layout'
import { Posts } from 'components/Posts'
import { Title } from 'components/Title'
import { NextPage } from 'next'

const Blog: NextPage = () => {
  return (
    <Layout label="Blog" description="This page is about null blog page">
      <section className="max-w-screen-lg h-auto mx-auto my-8 px-4 space-y-4">
        <Posts />
      </section>
    </Layout>
  )
}

export default Blog
