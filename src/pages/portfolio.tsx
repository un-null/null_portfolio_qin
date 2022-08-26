import { Layout } from 'components/Layout'
import { Works } from 'components/Works'
import { NextPage } from 'next'

const Portfolio: NextPage = () => {
  return (
    <Layout label="Portfolio" description="This page is about null works">
      <section className="mx-auto my-8 h-auto max-w-screen-lg px-4">
        <Works />
      </section>
    </Layout>
  )
}

export default Portfolio
