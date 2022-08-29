import { Layout } from 'components/Layout'
import { Posts } from 'components/Posts'
import { Repositories } from 'components/Repositories'
import { Top } from 'components/Top'
import { Tweets } from 'components/Tweets'
import { Works } from 'components/Works'
import { client } from 'libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import type { GetStaticProps, NextPage } from 'next'
import { Blog } from 'types'

type Props = {
  blogData: MicroCMSListResponse<Blog>
}

const Home: NextPage<Props> = ({ blogData }) => {
  return (
    <Layout label="Home" description="This page is nulls portfolio homepage">
      {/* Top Section */}
      <Top />

      {/* Blog Section */}
      <Posts {...blogData} />

      {/* Portfolio Section */}
      <Works />

      {/* Twitter & GitHub Section */}
      <div className="mx-auto mt-10 grid w-full max-w-screen-lg grid-cols-1 sm:mt-20 md:grid-cols-2">
        {/* GitHub Section */}
        <Repositories />

        {/* Twitter Section */}
        <Tweets />
      </div>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 5 },
  })

  return {
    props: {
      blogData,
    },
  }
}
