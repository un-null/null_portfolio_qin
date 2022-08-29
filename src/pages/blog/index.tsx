import { Layout } from 'components/Layout'
import { Posts } from 'components/Posts'
import { client } from 'libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps, NextPage } from 'next'
import { Blog } from 'types'

type Props = MicroCMSListResponse<Blog>

const Blog: NextPage<Props> = (props) => {
  return (
    <Layout label="Blog" description="This page is about null blog page">
      <section className="mx-auto my-8 h-auto max-w-screen-lg space-y-4 px-4">
        <Posts {...props} />
      </section>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' })

  return {
    props: data,
  }
}
