import { Layout } from 'components/Layout'
import { Works } from 'components/Works'
import { client } from 'libs/client'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps, NextPage } from 'next'
import { Portfolio } from 'types'

type Props = MicroCMSListResponse<Portfolio>

const Portfolio: NextPage<Props> = (props) => {
  return (
    <Layout label="Portfolio" description="This page is about null works">
      <section className="mx-auto my-8 h-auto max-w-screen-lg px-4">
        <Works {...props} />
      </section>
    </Layout>
  )
}

export default Portfolio

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Portfolio>({
    endpoint: 'portfolio',
  })

  return {
    props: data,
  }
}
