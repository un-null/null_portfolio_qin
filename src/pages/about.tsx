import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <Layout
      label="About"
      description="This page is the self-introduction page of null"
    >
      <div className="w-full max-w-screen-lg h-full mx-auto my-10">
        <Title title="About" />
        <h1 className="text-3xl font-semibold my-4">null</h1>
        <p>null is null</p>
      </div>
    </Layout>
  )
}

export default About
