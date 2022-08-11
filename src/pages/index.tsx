import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from '@tabler/icons'
import { Layout } from 'components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout label="Home">
      <section className="h-60 bg-pink-500">
        <div className="w-full h-full max-w-screen-lg mx-auto flex justify-between items-center px-4 text-white">
          <div className="font-bold">
            <h1 className="text-4xl">null</h1>
            <p className="text-xl">nullのportfolioのためのページです</p>
          </div>

          <div className="flex space-x-4">
            <IconBrandTwitter />
            <IconBrandFacebook />
            <IconBrandGithub />
          </div>
        </div>
      </section>
      <section>
        <h1>Blog</h1>
      </section>
      <section>
        <h1>GitHub</h1>
      </section>
      <section>
        <h1>Twitter</h1>
      </section>
    </Layout>
  )
}

export default Home
