import { Layout } from 'components/Layout'
import { Posts } from 'components/Posts'
import { Repositories } from 'components/Repositories'
import { Top } from 'components/Top'
import { Tweets } from 'components/Tweets'
import { Works } from 'components/Works'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout label="Home" description="This page is nulls portfolio homepage">
      {/* Top Section */}
      <Top />

      {/* Blog Section */}
      <Posts />

      {/* Portfolio Section */}
      <Works />

      {/* Twitter & GitHub Section */}
      <div className="w-full max-w-screen-lg mt-20 mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* GitHub Section */}
        <Repositories />

        {/* Twitter Section */}
        <Tweets />
      </div>
    </Layout>
  )
}

export default Home
