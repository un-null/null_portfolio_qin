import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <Layout
      label="About"
      description="This page is the self-introduction page of null"
    >
      <div className="mx-auto my-10 h-full w-full max-w-screen-lg px-4">
        <Title title="About" />
        <h1 className="my-4 text-2xl font-bold">null</h1>
        <p className="text-base font-medium">null is null</p>
      </div>
    </Layout>
  )
}

export default About
