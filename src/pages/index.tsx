import { Layout, Posts, Repositories, Top, Tweets, Works } from 'components'
import { microClient, twitterClient } from 'libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import type { GetStaticProps, NextPage } from 'next'
import { Blog, Portfolio, TwiiterData } from 'types'

type Props = {
  blogData: MicroCMSListResponse<Blog>
  portfolioData: MicroCMSListResponse<Portfolio>
  twitterData: TwiiterData
}

const Home: NextPage<Props> = ({ blogData, portfolioData, twitterData }) => {
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
        <Repositories />

        {/* Twitter Section */}
        <Tweets {...twitterData} />
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

  const tweetUser = await twitterClient.users.findUserById(
    '1351538984791339018',
    {
      'user.fields': ['profile_image_url'],
    }
  )

  const tweets = await twitterClient.tweets.usersIdTweets(
    '1351538984791339018',
    {
      expansions: ['attachments.media_keys'],
      max_results: 5,
      'tweet.fields': ['id', 'text', 'created_at', 'entities'],
    }
  )

  const twitterData = {
    user: tweetUser,
    tweets: tweets,
  }

  return {
    props: {
      blogData,
      portfolioData,
      twitterData,
    },
    revalidate: 10 * 60,
  }
}
