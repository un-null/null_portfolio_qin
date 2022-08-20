import Link from 'next/link'
import { FC } from 'react'
import { Blog } from 'types'

export const Post: FC<Blog> = ({ id, title, content, created_at }) => {
  return (
    <li className="max-w-screen-md space-y-2">
      <Link href={`/blog/${id}`} passHref>
        <div className="cursor-pointer">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="my-2 text-base font-medium line-clamp-2">{content}</p>
          <time className="text-xs font-bold text-gray-500">{created_at}</time>
        </div>
      </Link>
    </li>
  )
}
