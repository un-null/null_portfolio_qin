import { TypographyStylesProvider } from '@mantine/core'
import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { client } from 'libs/client'
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Blog } from 'types'
import dayjs from 'dayjs'

type Props = Blog & MicroCMSContentId & MicroCMSDate

const PostId: NextPage<Props> = (props) => {
  return (
    <Layout label="Post" description="this is the detailed blog page of null">
      <div className="mx-auto mt-8 w-full max-w-screen-lg px-4">
        <Title title={props.title} />
        <time className="my-2 block font-semibold text-gray-400">
          {dayjs(props.created_at).format('YYYY.MM.DD')}
        </time>
        <TypographyStylesProvider>
          <article dangerouslySetInnerHTML={{ __html: props.body }} />
        </TypographyStylesProvider>
      </div>
    </Layout>
  )
}

export default PostId

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' })
  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true }
  }

  const data = await client.getListDetail<Blog>({
    endpoint: 'blog',
    contentId: ctx.params.id,
  })
  return {
    props: data,
  }
}
