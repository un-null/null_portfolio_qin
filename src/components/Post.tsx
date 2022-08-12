import { FC } from 'react'

export const Post: FC = () => {
  return (
    <div className="max-w-screen-md my-4">
      <h1 className="text-2xl font-semibold my-2">This is Header</h1>
      <p className=" text-lg my-2">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit
      </p>
      <time>2022.7.11</time>
    </div>
  )
}
