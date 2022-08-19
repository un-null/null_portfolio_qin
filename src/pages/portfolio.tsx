import { Button } from '@mantine/core'
import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { Works } from 'components/Works'
import { NextPage } from 'next'

const Portfolio: NextPage = () => {
  return (
    <Layout label="Portfolio" description="This page is about null works">
      <section className="max-w-screen-lg h-auto mx-auto my-8 px-4">
        <Works />
      </section>
    </Layout>
  )
}

export default Portfolio
