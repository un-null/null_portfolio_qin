import { Loader } from '@mantine/core'
import { Layout, Posts, Repositories, Top, Tweets, Works } from 'components'
import { microClient } from 'libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import type { GetStaticProps, NextPage } from 'next'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Blog, Portfolio } from 'types'

type Props = {
  blogData: MicroCMSListResponse<Blog>
  portfolioData: MicroCMSListResponse<Portfolio>
}

const Home: NextPage<Props> = ({ blogData, portfolioData }) => {
  return (
    <Layout label="Home" description="This page is nulls portfolio homepage">
      {/* Top Section */}
      <Top />

      {/* Blog Section */}
      <Posts {...blogData} />

      {/* Portfolio Section */}
      <Works {...portfolioData} />

      {/* Twitter & GitHub Section */}
      <div className="mx-auto mt-10 grid w-full max-w-screen-lg grid-cols-1 sm:mt-20 md:grid-cols-2">
        {/* GitHub Section */}
        <ErrorBoundary
          fallback={
            <p className="font-bold text-red-400">
              Failed to fetch Github data.
            </p>
          }
        >
          <Suspense fallback={<Loader color="pink" />}>
            <Repositories />
          </Suspense>
        </ErrorBoundary>

        {/* Twitter Section */}
        <ErrorBoundary
          fallback={
            <p className="font-bold text-red-400">
              Failed to fetch Twitter data.
            </p>
          }
        >
          <Suspense fallback={<Loader color="pink" />}>
            <Tweets />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await microClient.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 5 },
  })

  const portfolioData = await microClient.getList<Portfolio>({
    endpoint: 'portfolio',
    queries: { limit: 6 },
  })

  return {
    props: {
      blogData,
      portfolioData,
    },
    revalidate: 10 * 60,
  }
}
