import { Layout } from 'components/Layout'
import { Posts } from 'components/Posts'
import { Repositories } from 'components/Repositories'
import { Title } from 'components/Title'
import { Top } from 'components/Top'
import { Tweets } from 'components/Tweets'
import { Works } from 'components/Works'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout label="Home">
      {/* Top Section */}
      <Top />

      {/* Blog Section */}
      <section className="max-w-screen-lg h-auto mx-auto my-8 px-4 space-y-4">
        <Title title="Blog" />
        <Posts />
      </section>

      {/* Portfolio Section */}
      <section className="max-w-screen-lg h-auto mx-auto my-8 px-4">
        <Title title="Portfolio" />
        <Works />
      </section>

      {/* Twitter & GitHub Section */}

      <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* GitHub Section */}

        <section className="w-full sm:w-[768px] md:w-full h-auto mx-auto my-8 px-4 space-y-4">
          <Title title="GitHub" />
          <Repositories />
        </section>

        {/* Twitter Section */}
        <section className="w-full sm:w-[768px] md:w-full h-auto mx-auto my-8 px-4 space-y-4">
          <Title title="Twitter" />
          <Tweets />
        </section>
      </div>
    </Layout>
  )
}

export default Home
