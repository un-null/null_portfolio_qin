import { Layout } from 'components/Layout'
import { Title } from 'components/Title'
import { NextPage } from 'next'

const PostId: NextPage = () => {
  return (
    <Layout label="Post" description="this is the detailed blog page of null">
      <div className="mx-auto mt-8 w-full max-w-screen-lg">
        <Title title="This is a header" />
        <time className="my-2 block font-semibold text-gray-400">
          2022.7.11
        </time>
        <p className=" text-lg">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </p>
      </div>
    </Layout>
  )
}

export default PostId
