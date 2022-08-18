import Link from 'next/link'
import { FC } from 'react'
import { Blog } from 'types'

export const Post: FC<Blog> = ({ id, title, content, created_at }) => {
  return (
    <div className="max-w-screen-md my-8">
      <Link href={`/blog/${id}`} passHref>
        <div className="cursor-pointer">
          <h1 className="text-2xl font-semibold my-2">{title}</h1>
          <p className=" text-lg my-2">{content}</p>
          <time>{created_at}</time>
        </div>
      </Link>
    </div>
  )
}
