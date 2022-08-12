import { Button } from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
} from '@tabler/icons'
import { Layout } from 'components/Layout'
import { Post } from 'components/Post'
import { Repositories } from 'components/Repositories'
import { Title } from 'components/Title'
import { Tweets } from 'components/Tweets'
import { Works } from 'components/Works'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout label="Home">
      <section className="h-60 bg-[#E64980] mb-8">
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
      <section className="max-w-screen-lg h-auto mx-auto my-8 px-4">
        <Title title="Portfolio" />
        <Works />
        <div className="w-full h-auto grid place-items-center">
          <Button color="dark" size="md" radius="xl" className="my-4">
            View All
          </Button>
        </div>
      </section>
      <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2">
        <section className="w-full sm:w-[768px] md:w-full h-auto mx-auto my-8 px-4 space-y-4">
          <Title title="GitHub" />
          <Repositories />
          <div className="w-full h-auto grid place-items-center">
            <Button color="dark" size="md" radius="xl" className="my-4">
              View All
            </Button>
          </div>
        </section>
        <section className="w-full sm:w-[768px] md:w-full h-auto mx-auto my-8 px-4 space-y-4">
          <Title title="Twitter" />
          <Tweets />
          <div className="w-full h-auto grid place-items-center">
            <Button color="dark" size="md" radius="xl" className="my-4">
              View All
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
