import { Button } from '@mantine/core'
import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { Works } from 'components/Works'
import { NextPage } from 'next'

const Portfolio: NextPage = () => {
  return (
    <Layout label="Portfolio">
      <section className="max-w-screen-lg h-auto mx-auto my-8 px-4">
        <Title title="Portfolio" />
        <Works />
        <div className="w-full h-auto grid place-items-center">
          <Button color="dark" size="md" radius="xl" className="my-4">
            View All
          </Button>
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
